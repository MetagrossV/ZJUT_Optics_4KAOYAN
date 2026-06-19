// 光学模拟引擎页面
const dataScenes = require('../../data/data_optical_scenes.js');

Page({
  data: {
    scenes: [
      { id: 'convexLens', name: '凸透镜成像' },
      { id: 'planeMirror', name: '平面镜反射' },
      { id: 'prismRefraction', name: '三棱镜折射' },
      { id: 'concaveLens', name: '凹透镜发散' }
    ],
    currentSceneId: 'convexLens',
    currentSceneName: '凸透镜成像',
    currentSceneIndex: 0,
    params: {},
    paramDefinitions: [],
    canvasWidth: 750,
    canvasHeight: 600,
    dpr: 1
  },

  canvas: null,
  ctx: null,
  sceneData: null,

  onLoad() {
    const dpr = wx.getSystemInfoSync().pixelRatio || 1;
    this.setData({ dpr });
    this.loadScene('convexLens');
  },

  onReady() {
    this.initCanvas();
    this.getCanvasOffset();
  },

  getCanvasOffset() {
    const query = wx.createSelectorQuery().in(this);
    query.select('#opticalCanvas').boundingClientRect(rect => {
      if (rect) {
        this.canvasOffsetX = rect.left;
        this.canvasOffsetY = rect.top;
        this.canvasCSSWidth = rect.width;
        this.canvasCSSHeight = rect.height;
      }
    }).exec();
  },

  pageToCanvas(touchX, touchY) {
    const scaleX = this.data.canvasWidth / (this.canvasCSSWidth || this.data.canvasWidth);
    const scaleY = this.data.canvasHeight / (this.canvasCSSHeight || this.data.canvasHeight);
    return { x: touchX * scaleX, y: touchY * scaleY };
  },

  onShow() {
    if (this.ctx) {
      this.draw();
    }
  },

  // 初始化 Canvas 2D
  initCanvas() {
    const query = wx.createSelectorQuery();
    query.select('#opticalCanvas').fields({ node: true, size: true }).exec((res) => {
      if (!res || !res[0] || !res[0].node) {
        console.warn('Canvas 初始化失败');
        return;
      }
      const canvas = res[0].node;
      const ctx = canvas.getContext('2d');
      const dpr = this.data.dpr;
      canvas.width = this.data.canvasWidth * dpr;
      canvas.height = this.data.canvasHeight * dpr;
      ctx.scale(dpr, dpr);
      this.canvas = canvas;
      this.ctx = ctx;
      this.draw();
    });
  },

  // 加载场景
  loadScene(sceneId) {
    const sceneData = dataScenes.SCENES[sceneId];
    if (!sceneData) {
      console.error('场景不存在:', sceneId);
      return;
    }

    const params = {};
    const paramDefinitions = [];
    (sceneData.adjustableParams || []).forEach(p => {
      params[p.id] = p.default;
      paramDefinitions.push({ ...p, currentValue: p.default });
    });

    this.sceneData = sceneData;
    const sceneIndex = this.data.scenes.findIndex(s => s.id === sceneId);
    const sceneName = this.data.scenes[sceneIndex]?.name || sceneData.name;

    this.setData({
      currentSceneId: sceneId,
      currentSceneName: sceneName,
      currentSceneIndex: sceneIndex >= 0 ? sceneIndex : 0,
      params: params,
      paramDefinitions: paramDefinitions
    }, () => {
      if (this.ctx) this.draw();
    });
  },

  // 切换场景
  onSceneChange(e) {
    const index = e.detail.value;
    const sceneId = this.data.scenes[index].id;
    this.loadScene(sceneId);
  },

  // 参数调整
  onParamChange(e) {
    const paramId = e.currentTarget.dataset.paramId;
    const value = e.detail.value;
    const params = { ...this.data.params, [paramId]: value };
    const paramDefinitions = this.data.paramDefinitions.map(p =>
      p.id === paramId ? { ...p, currentValue: value } : p
    );
    this.setData({ params, paramDefinitions }, () => {
      if (this.ctx) this.draw();
    });
  },

  // ===== 坐标转换：物理坐标 -> Canvas坐标 =====
  // 支持视图缩放和偏移，让画布自动聚焦关键元素
  toCanvas(physX, physY) {
    const cx = this.data.canvasWidth / 2;
    const cy = this.data.canvasHeight / 2;
    const scale = this.data.viewScale || 1;
    const offsetX = this.data.viewOffsetX || 0;
    return { x: cx + (physX + offsetX) * scale, y: cy - physY * scale };
  },

  // Canvas坐标 -> 物理坐标
  toPhysics(canvasX, canvasY) {
    const cx = this.data.canvasWidth / 2;
    const cy = this.data.canvasHeight / 2;
    const scale = this.data.viewScale || 1;
    const offsetX = this.data.viewOffsetX || 0;
    return { x: (canvasX - cx) / scale - offsetX, y: (cy - canvasY) / scale };
  },

  // ===== 计算视图参数：自动聚焦关键元素 =====
  computeViewParams() {
    const { params, currentSceneId } = this.data;
    if (!this.sceneData) return { viewScale: 1, viewOffsetX: 0 };

    // 收集关键元素的物理坐标
    let minX = -300, maxX = 300, keyX = 0;

    if (currentSceneId === 'convexLens' || currentSceneId === 'concaveLens') {
      const lensX = 375; // 透镜始终居中，不可拖动
      const u = params.objectDistance || 200;
      const f = params.focalLength || 100;
      const v = Math.abs(u - f) < 0.5 ? (u > f ? 99999 : -99999) : (u * f) / (u - f);
      keyX = lensX;
      minX = Math.min(lensX - u - 50, lensX + v - 50);
      maxX = Math.max(lensX + 50, lensX + v + 50, lensX - u + 50);
    } else if (currentSceneId === 'planeMirror') {
      const mirrorX = params.mirrorX || 250;
      const objX = params.objectX || -150;
      keyX = mirrorX;
      minX = Math.min(objX, mirrorX) - 50;
      maxX = Math.max(mirrorX + 150, Math.abs(objX) + 50);
    } else if (currentSceneId === 'prismRefraction') {
      const prismX = params.prismX || 250;
      keyX = prismX;
      minX = prismX - 200;
      maxX = prismX + 300;
    }

    // 限制范围，防止无限大
    minX = Math.max(minX, -1000);
    maxX = Math.min(maxX, 1000);

    const rangeX = maxX - minX;
    const canvasW = this.data.canvasWidth;
    const padding = 60; // 边距
    // 缩放比例：确保场景宽度在画布内（留边距）
    let scale = (canvasW - padding * 2) / Math.max(rangeX, 200);
    // 限制缩放范围
    scale = Math.max(0.3, Math.min(scale, 2.0));

    // 偏移：让关键元素（如透镜）在画布中心
    const offsetX = -keyX;

    return { viewScale: scale, viewOffsetX: offsetX };
  },

  // ===== 拖动功能 =====
  isDragging: false,
  dragTarget: null,
  lastTouchX: 0,

  onCanvasTouchStart(e) {
    const touch = e.touches[0];
    const canvasPos = this.pageToCanvas(touch.x, touch.y);
    const phys = this.toPhysics(canvasPos.x, canvasPos.y);
    const { params, currentSceneId } = this.data;

    // 检测可拖动器件
    let target = null;
    const threshold = 40; // 拖动阈值

    if (currentSceneId === 'convexLens' || currentSceneId === 'concaveLens') {
      // 透镜始终居中，不可拖动，只检测物体
      const lensX = 375;
      const objX = lensX - (params.objectDistance || 200);
      if (Math.abs(phys.x - objX) < threshold && Math.abs(phys.y - (params.objectHeight || 60)) < 40) {
        target = { paramId: 'objectDistance', label: '物体', lensX: lensX };
      }
    } else if (currentSceneId === 'planeMirror') {
      const mirrorX = params.mirrorX || 250;
      if (Math.abs(phys.x - mirrorX) < threshold && Math.abs(phys.y) < 80) {
        target = { paramId: 'mirrorX', label: '平面镜' };
      }
      const objX = params.objectX || -150;
      if (Math.abs(phys.x - objX) < threshold && Math.abs(phys.y - (params.objectHeight || 60)) < 40) {
        target = { paramId: 'objectX', label: '物体' };
      }
    } else if (currentSceneId === 'prismRefraction') {
      const prismX = params.prismX || 250;
      if (Math.abs(phys.x - prismX) < threshold && Math.abs(phys.y) < 80) {
        target = { paramId: 'prismX', label: '棱镜' };
      }
    }

    if (target) {
      this.isDragging = true;
      this.dragTarget = target;
      this.lastTouchX = phys.x;
      wx.showToast({ title: '拖动' + target.label, icon: 'none', duration: 500 });
    }
  },

  onCanvasTouchMove(e) {
    if (!this.isDragging || !this.dragTarget) return;
    const touch = e.touches[0];
    const canvasPos = this.pageToCanvas(touch.x, touch.y);
    const phys = this.toPhysics(canvasPos.x, canvasPos.y);
    const dx = phys.x - this.lastTouchX;
    this.lastTouchX = phys.x;

    const { params, paramDefinitions } = this.data;
    const target = this.dragTarget;
    const paramId = target.paramId;
    const oldValue = params[paramId] || 0;
    let newValue = oldValue + dx;

    // 限制范围
    const def = paramDefinitions.find(p => p.id === paramId);
    if (def) {
      newValue = Math.max(def.min, Math.min(def.max, newValue));
    }

    // 更新参数
    const newParams = { ...params, [paramId]: Math.round(newValue) };
    const newDefinitions = paramDefinitions.map(p =>
      p.id === paramId ? { ...p, currentValue: Math.round(newValue) } : p
    );

    this.setData({ params: newParams, paramDefinitions: newDefinitions }, () => {
      if (this.ctx) this.draw();
    });
  },

  onCanvasTouchEnd(e) {
    if (this.isDragging) {
      this.isDragging = false;
      this.dragTarget = null;
    }
  },

  // ===== 绘制主函数 =====
  draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.data.canvasWidth;
    const h = this.data.canvasHeight;

    // 计算视图参数（自动聚焦）——直接修改 this.data，避免 setData 触发重渲染循环
    const viewParams = this.computeViewParams();
    this.data.viewScale = viewParams.viewScale;
    this.data.viewOffsetX = viewParams.viewOffsetX;

    // 清空背景
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, w, h);

    // 绘制网格
    this.drawGrid(ctx, w, h);
    // 绘制光轴
    this.drawOpticalAxis(ctx, w, h);
    // 绘制场景
    if (this.sceneData) {
      this.drawScene(ctx, this.sceneData, this.data.params);
    }
  },

  drawGrid(ctx, w, h) {
    const scale = this.data.viewScale || 1;
    const offsetX = this.data.viewOffsetX || 0;
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 0.5;
    const gridSize = 50 * scale;
    const centerX = w / 2 + offsetX * scale;
    const startX = centerX % gridSize;
    for (let x = startX; x <= w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let x = startX - gridSize; x >= 0; x -= gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    const cy = h / 2;
    const startY = cy % gridSize;
    for (let y = startY; y <= h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    for (let y = startY - gridSize; y >= 0; y -= gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    // 绘制网格交点（吸附点）
    ctx.fillStyle = 'rgba(173, 181, 189, 0.3)';
    for (let x = startX; x <= w; x += gridSize) {
      for (let y = startY; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  },

  drawOpticalAxis(ctx, w, h) {
    const cy = h / 2;
    const scale = this.data.viewScale || 1;
    const offsetX = this.data.viewOffsetX || 0;
    // 主光轴（更粗更醒目）
    ctx.strokeStyle = '#adb5bd';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    // 光轴刻度标记（随缩放平移）
    ctx.fillStyle = '#adb5bd';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    const gridSize = 50 * scale;
    const centerX = w / 2 + offsetX * scale;
    const startX = centerX % gridSize;
    for (let x = startX; x <= w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, cy - 4);
      ctx.lineTo(x, cy + 4);
      ctx.stroke();
      // 刻度标注（物理坐标）
      const physX = Math.round((x - w / 2) / scale - offsetX);
      if (physX !== 0 && Math.abs(physX) % 50 === 0) {
        ctx.fillText(String(physX), x, cy + 16);
      }
    }
    ctx.textAlign = 'right';
    ctx.font = '12px sans-serif';
    ctx.fillText('光轴', w - 10, cy - 12);
    ctx.textAlign = 'left';
  },

  drawScene(ctx, scene, params) {
    // 绘制所有光学元件
    if (scene.elements) {
      scene.elements.forEach(elem => {
        this.drawElement(ctx, elem, params);
      });
    }
    // 绘制光线
    if (scene.generateRays) {
      const rays = scene.generateRays(params);
      this.drawRays(ctx, rays);
    }
  },

  drawElement(ctx, element, params) {
    const pos = element.getPosition ? element.getPosition(params) : {};
    switch (element.type) {
      case 'object':
        this.drawObjectSymbol(ctx, pos);
        break;
      case 'lens-convex':
        this.drawConvexLensSymbol(ctx, pos);
        break;
      case 'lens-concave':
        this.drawConcaveLensSymbol(ctx, pos);
        break;
      case 'mirror-plane':
        this.drawPlaneMirrorSymbol(ctx, pos);
        break;
      case 'prism':
        this.drawPrismSymbol(ctx, pos);
        break;
      case 'image':
        this.drawImageSymbol(ctx, pos);
        break;
      case 'normal-line':
        this.drawNormalLine(ctx, pos);
        break;
    }
  },

  // ===== 绘制物体 =====
  drawObjectSymbol(ctx, pos) {
    const { x, y = 0, height = 60 } = pos;
    const halfH = height / 2;
    const top = this.toCanvas(x, halfH);
    const bottom = this.toCanvas(x, -halfH);

    ctx.strokeStyle = '#e03131';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(top.x, top.y);
    ctx.lineTo(bottom.x, bottom.y);
    ctx.stroke();

    // 箭头向上
    ctx.fillStyle = '#e03131';
    this.drawArrowHead(ctx, top.x, top.y, -Math.PI / 2, 8);

    // 标注
    ctx.fillStyle = '#e03131';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('A', top.x - 6, top.y + 4);
    ctx.fillText('B', bottom.x - 6, bottom.y + 14);
    ctx.textAlign = 'left';
  },

  // ===== 绘制像 =====
  drawImageSymbol(ctx, pos) {
    const { x, y = 0, height = 60, real = true, upright = false } = pos;
    const halfH = height / 2;
    // 实像倒立：A'在上（倒立），B'在下；虚像正立：A'在上，B'在下
    const topY = upright ? halfH : -halfH;
    const bottomY = upright ? -halfH : halfH;
    const top = this.toCanvas(x, topY);
    const bottom = this.toCanvas(x, bottomY);

    ctx.strokeStyle = '#1971c2';
    ctx.lineWidth = 2.5;
    if (!real) {
      ctx.setLineDash([6, 4]);
    }
    ctx.beginPath();
    ctx.moveTo(top.x, top.y);
    ctx.lineTo(bottom.x, bottom.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // 箭头方向
    const arrowAngle = upright ? -Math.PI / 2 : Math.PI / 2;
    ctx.fillStyle = '#1971c2';
    this.drawArrowHead(ctx, top.x, top.y, arrowAngle, 8);

    // 标注
    ctx.fillStyle = '#1971c2';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText("A'", top.x + 6, top.y + 4);
    ctx.fillText("B'", bottom.x + 6, bottom.y + 14);
  },

  // ===== 绘制凸透镜 =====
  drawConvexLensSymbol(ctx, pos) {
    const { x, y = 0, focalLength = 100, aperture = 120 } = pos;
    const c = this.toCanvas(x, y);
    const halfA = aperture / 2;
    const absF = Math.abs(focalLength);
    // 曲率半径与焦距相关：R ≈ (n-1)*f，取 n=1.5，R ≈ 0.5*f
    const curvature = Math.min(halfA * 0.45, absF * 0.2, 40);

    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(100, 181, 246, 0.35)';

    // 左弧（向外凸）
    ctx.beginPath();
    ctx.moveTo(c.x - 6, c.y - halfA);
    ctx.quadraticCurveTo(c.x - curvature - 12, c.y - halfA * 0.5, c.x - curvature - 6, c.y);
    ctx.quadraticCurveTo(c.x - curvature - 12, c.y + halfA * 0.5, c.x - 6, c.y + halfA);
    ctx.stroke();

    // 右弧（向外凸）
    ctx.beginPath();
    ctx.moveTo(c.x + 6, c.y - halfA);
    ctx.quadraticCurveTo(c.x + curvature + 12, c.y - halfA * 0.5, c.x + curvature + 6, c.y);
    ctx.quadraticCurveTo(c.x + curvature + 12, c.y + halfA * 0.5, c.x + 6, c.y + halfA);
    ctx.stroke();

    // 填充透镜区域
    ctx.beginPath();
    ctx.moveTo(c.x - 6, c.y - halfA);
    ctx.quadraticCurveTo(c.x - curvature - 12, c.y - halfA * 0.5, c.x - curvature - 6, c.y);
    ctx.quadraticCurveTo(c.x - curvature - 12, c.y + halfA * 0.5, c.x - 6, c.y + halfA);
    ctx.lineTo(c.x + 6, c.y + halfA);
    ctx.quadraticCurveTo(c.x + curvature + 12, c.y + halfA * 0.5, c.x + curvature + 6, c.y);
    ctx.quadraticCurveTo(c.x + curvature + 12, c.y - halfA * 0.5, c.x + 6, c.y - halfA);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 中心竖线
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(c.x, c.y - halfA - 6);
    ctx.lineTo(c.x, c.y + halfA + 6);
    ctx.stroke();

    // 焦距标注
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`f = ${focalLength}mm`, c.x, c.y + halfA + 28);
    ctx.textAlign = 'left';
  },

  // ===== 绘制凹透镜 =====
  drawConcaveLensSymbol(ctx, pos) {
    const { x, y = 0, focalLength = -100, aperture = 120 } = pos;
    const c = this.toCanvas(x, y);
    const halfA = aperture / 2;
    const absF = Math.abs(focalLength);
    // 曲率半径与焦距相关
    const curvature = Math.min(halfA * 0.35, absF * 0.15, 30);

    ctx.strokeStyle = '#6c5ce7';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(179, 157, 219, 0.3)';

    // 左弧（向内凹）
    ctx.beginPath();
    ctx.moveTo(c.x - 10, c.y - halfA);
    ctx.quadraticCurveTo(c.x + curvature, c.y - halfA * 0.5, c.x - 10, c.y);
    ctx.quadraticCurveTo(c.x + curvature, c.y + halfA * 0.5, c.x - 10, c.y + halfA);
    ctx.stroke();

    // 右弧（向内凹）
    ctx.beginPath();
    ctx.moveTo(c.x + 10, c.y - halfA);
    ctx.quadraticCurveTo(c.x - curvature, c.y - halfA * 0.5, c.x + 10, c.y);
    ctx.quadraticCurveTo(c.x - curvature, c.y + halfA * 0.5, c.x + 10, c.y + halfA);
    ctx.stroke();

    // 填充
    ctx.beginPath();
    ctx.moveTo(c.x - 10, c.y - halfA);
    ctx.quadraticCurveTo(c.x + curvature, c.y - halfA * 0.5, c.x - 10, c.y);
    ctx.quadraticCurveTo(c.x + curvature, c.y + halfA * 0.5, c.x - 10, c.y + halfA);
    ctx.lineTo(c.x + 10, c.y + halfA);
    ctx.quadraticCurveTo(c.x - curvature, c.y + halfA * 0.5, c.x + 10, c.y);
    ctx.quadraticCurveTo(c.x - curvature, c.y - halfA * 0.5, c.x + 10, c.y - halfA);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 中心竖线
    ctx.strokeStyle = '#6c5ce7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(c.x, c.y - halfA - 6);
    ctx.lineTo(c.x, c.y + halfA + 6);
    ctx.stroke();

    // 焦距标注
    ctx.fillStyle = '#6c5ce7';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`f = -${absF}mm`, c.x, c.y + halfA + 28);
    ctx.textAlign = 'left';
  },

  // ===== 绘制平面镜 =====
  drawPlaneMirrorSymbol(ctx, pos) {
    const { x, y = 0, angle = 0, length = 180 } = pos;
    const halfLen = length / 2;

    // 计算端点（物理坐标）
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    // 镜面沿 angle 方向垂直（法线方向为 angle）
    // 实际上，angle 是镜面法线与水平方向的夹角，或者镜面本身的倾斜角
    // 这里假设 angle 是镜面与水平方向的夹角
    const x1 = x - halfLen * cosA;
    const y1 = y - halfLen * sinA;
    const x2 = x + halfLen * cosA;
    const y2 = y + halfLen * sinA;

    const p1 = this.toCanvas(x1, y1);
    const p2 = this.toCanvas(x2, y2);

    // 绘制镜面主体
    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // 绘制反射面标记（背面粗线）
    const backOffset = 8;
    const nx = -sinA; // 法线x（垂直于镜面方向）
    const ny = cosA;
    const backX1 = p1.x + backOffset * nx;
    const backY1 = p1.y + backOffset * ny;
    const backX2 = p2.x + backOffset * nx;
    const backY2 = p2.y + backOffset * ny;
    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(backX1, backY1);
    ctx.lineTo(backX2, backY2);
    ctx.stroke();

    // 短斜线标记反射面
    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 1;
    const numTicks = 7;
    for (let i = 0; i <= numTicks; i++) {
      const t = i / numTicks;
      const bx = p1.x + t * (p2.x - p1.x);
      const by = p1.y + t * (p2.y - p1.y);
      const tickLen = 5;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + tickLen * nx, by + tickLen * ny);
      ctx.stroke();
    }
  },

  // ===== 绘制三棱镜 =====
  drawPrismSymbol(ctx, pos) {
    const { vertices } = pos;
    if (!vertices || vertices.length < 3) return;

    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 2.5;
    ctx.fillStyle = 'rgba(173, 216, 230, 0.2)';

    ctx.beginPath();
    const p0 = this.toCanvas(vertices[0].x, vertices[0].y);
    ctx.moveTo(p0.x, p0.y);
    for (let i = 1; i < vertices.length; i++) {
      const pi = this.toCanvas(vertices[i].x, vertices[i].y);
      ctx.lineTo(pi.x, pi.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 顶点标注
    ctx.fillStyle = '#495057';
    ctx.font = '12px sans-serif';
    vertices.forEach((v, i) => {
      const pv = this.toCanvas(v.x, v.y);
      ctx.fillText(String.fromCharCode(65 + i), pv.x + 6, pv.y - 6);
    });
  },

  // ===== 绘制法线 =====
  drawNormalLine(ctx, pos) {
    const { x, y = 0, angle = 0 } = pos;
    const len = 90;
    const nx = Math.cos(angle);
    const ny = Math.sin(angle);
    const start = this.toCanvas(x - len * nx / 2, y - len * ny / 2);
    const end = this.toCanvas(x + len * nx / 2, y + len * ny / 2);

    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // 标注 N
    ctx.fillStyle = '#ff6b6b';
    ctx.font = 'bold 13px sans-serif';
    const labelPos = this.toCanvas(x + len * nx / 2 + 8, y + len * ny / 2);
    ctx.fillText('N', labelPos.x, labelPos.y);
  },

  // ===== 绘制光线 =====
  drawRays(ctx, rays) {
    if (!rays) return;
    rays.forEach(ray => this.drawRay(ctx, ray));
  },

  drawRay(ctx, ray) {
    if (!ray.start || !ray.segments) return;
    let current = this.toCanvas(ray.start.x, ray.start.y);

    ray.segments.forEach((seg, idx) => {
      const end = this.toCanvas(seg.to.x, seg.to.y);

      // 设置光线颜色
      if (ray.type === 'special' || ray.type === 'diverged') ctx.strokeStyle = '#ffa502';
      else if (ray.type === 'incident') ctx.strokeStyle = '#e03131';
      else if (ray.type === 'reflected') ctx.strokeStyle = '#2f9e44';
      else if (ray.type === 'white') ctx.strokeStyle = '#495057';
      else if (ray.type === 'internal') ctx.strokeStyle = '#74c0fc';
      else if (ray.type === 'dispersed') ctx.strokeStyle = '#e03131';
      else ctx.strokeStyle = '#ffa502';

      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(current.x, current.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();

      // 箭头（在光线中点）
      const mx = (current.x + end.x) / 2;
      const my = (current.y + end.y) / 2;
      const angle = Math.atan2(end.y - current.y, end.x - current.x);
      ctx.fillStyle = ctx.strokeStyle;
      this.drawArrowHead(ctx, mx, my, angle, 6);

      // 延长线（发散光线的反向延长线）
      if (ray.type === 'diverged' && idx === ray.segments.length - 1) {
        ctx.strokeStyle = '#ffa502';
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(current.x, current.y);
        ctx.lineTo(end.x + (end.x - current.x) * 0.5, end.y + (end.y - current.y) * 0.5);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
        ctx.setLineDash([]);
      }

      current = end;
    });
  },

  // 箭头头部
  drawArrowHead(ctx, x, y, angle, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * Math.cos(angle - Math.PI / 6), y - size * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x - size * Math.cos(angle + Math.PI / 6), y - size * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  }
});
