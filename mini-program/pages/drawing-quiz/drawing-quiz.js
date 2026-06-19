// 光学绘图题系统 - 交互式光学编辑器
// 列表式工具箱：选择器件 → 放置画布 → 拖动调整 → 设置参数 → 添加光线
const dataScenes = require('../../data/data_optical_scenes.js');

Page({
  data: {
    // 题目
    quizList: [],
    currentQuiz: null,
    currentQuizIndex: -1,

    // 画布
    canvasWidth: 750,
    canvasHeight: 600,
    dpr: 1,

    // 器件系统
    elements: [],          // 放置的器件列表
    rays: [],              // 光线列表
    selectedTool: null,    // 当前选择的工具类型
    selectedElementId: null, // 当前选中的器件ID
    isPlacing: false,      // 是否正在放置模式
    isDragging: false,     // 是否正在拖动

    // 拖动状态
    dragElementId: null,
    dragOffsetX: 0,
    dragOffsetY: 0,

    // 验证
    quizScore: -1,
    validationResult: null,

    // 参数面板
    paramPanelVisible: false,

    // 工具箱定义
    toolbox: [
      { id: 'convex-lens', name: '凸透镜', icon: '🔍', color: '#4a69bd' },
      { id: 'concave-lens', name: '凹透镜', icon: '🔎', color: '#6c5ce7' },
      { id: 'plane-mirror', name: '平面镜', icon: '🪞', color: '#00b894' },
      { id: 'object', name: '物体', icon: '📍', color: '#e03131' }
    ],
    selectedToolName: null
  },

  canvas: null,
  ctx: null,
  canvasOffsetX: 0,
  canvasOffsetY: 0,
  elementIdCounter: 0,

  onLoad() {
    const dpr = wx.getSystemInfoSync().pixelRatio || 1;
    this.setData({ dpr });
    this.loadQuizList();
  },

  onReady() {
    this.initCanvas();
    this.getCanvasOffset();
  },

  onShow() {
    if (this.ctx && this.data.currentQuiz) {
      this.draw();
    }
  },

  getCanvasOffset() {
    const query = wx.createSelectorQuery().in(this);
    query.select('#drawingCanvas').boundingClientRect(rect => {
      if (rect) {
        this.canvasOffsetX = rect.left;
        this.canvasOffsetY = rect.top;
        this.canvasCSSWidth = rect.width;
        this.canvasCSSHeight = rect.height;
      }
    }).exec();
  },

  // ===== Canvas 初始化 =====
  initCanvas() {
    const query = wx.createSelectorQuery();
    query.select('#drawingCanvas').fields({ node: true, size: true }).exec((res) => {
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
      if (this.data.currentQuiz) {
        this.draw();
      }
    });
  },

  // ===== 坐标转换 =====
  // 小程序 Canvas 2D 中，touch.x 是 Canvas 本地 CSS 像素坐标
  // 需要转换为 Canvas 逻辑坐标（与 ctx 坐标系一致）
  pageToCanvas(touchX, touchY) {
    const scaleX = this.data.canvasWidth / (this.canvasCSSWidth || this.data.canvasWidth);
    const scaleY = this.data.canvasHeight / (this.canvasCSSHeight || this.data.canvasHeight);
    return {
      x: touchX * scaleX,
      y: touchY * scaleY
    };
  },

  // 物理坐标 → Canvas 坐标（原点画布中心，y向上）
  toCanvas(physX, physY) {
    const cx = this.data.canvasWidth / 2;
    const cy = this.data.canvasHeight / 2;
    return { x: cx + physX, y: cy - physY };
  },

  // Canvas 坐标 → 物理坐标
  toPhysics(canvasX, canvasY) {
    const cx = this.data.canvasWidth / 2;
    const cy = this.data.canvasHeight / 2;
    return { x: canvasX - cx, y: cy - canvasY };
  },

  // ===== 网格吸附 =====
  snapToGrid(value, gridSize = 50) {
    const halfGrid = gridSize / 2;
    const remainder = ((value % gridSize) + gridSize) % gridSize; // 处理负数
    if (remainder < 20) return value - remainder;
    if (remainder > gridSize - 20) return value + (gridSize - remainder);
    return value;
  },

  // ===== 加载题目列表 =====
  loadQuizList() {
    const quizzes = dataScenes.DRAWING_QUIZZES || [];
    const scenes = dataScenes.SCENES;
    const list = quizzes.map(q => {
      const scene = scenes[q.sceneId];
      return {
        ...q,
        sceneName: scene ? scene.name : q.sceneId
      };
    });
    this.setData({ quizList: list });
  },

  // ===== 选择题目 =====
  selectQuiz(e) {
    const quizId = e.currentTarget.dataset.quizId;
    const index = this.data.quizList.findIndex(q => q.id === quizId);
    if (index < 0) return;
    this.loadQuiz(index);
  },

  loadQuiz(index) {
    const quiz = this.data.quizList[index];
    this.elementIdCounter = 0;
    this.setData({
      currentQuiz: quiz,
      currentQuizIndex: index,
      elements: [],
      rays: [],
      selectedToolName: null,
      selectedTool: null,
      isPlacing: false,
      isDragging: false,
      quizScore: -1,
      validationResult: null,
      paramPanelVisible: false
    }, () => {
      if (this.ctx) this.draw();
    });
  },

  // ===== 工具箱选择 =====
  selectTool(e) {
    const toolId = e.currentTarget.dataset.toolId;
    const tool = this.data.toolbox.find(t => t.id === toolId);
    // 点击已选中的工具则取消选择
    if (this.data.selectedTool === toolId) {
      this.setData({ selectedTool: null, isPlacing: false, selectedToolName: null });
    } else {
      this.setData({ selectedTool: toolId, isPlacing: true, selectedToolName: tool ? tool.name : null, selectedElementId: null, paramPanelVisible: false });
    }
  },

  // ===== 触摸事件处理 =====
  onCanvasTouchStart(e) {
    const touch = e.touches[0];
    const canvasPos = this.pageToCanvas(touch.x, touch.y);
    const phys = this.toPhysics(canvasPos.x, canvasPos.y);

    // 放置模式：有选中的工具，点击画布放置器件
    if (this.data.isPlacing && this.data.selectedTool) {
      this.placeElement(this.data.selectedTool, phys.x, phys.y);
      return;
    }

    // 选择模式：检测是否点击了某个器件
    const hitElement = this.hitTestElement(phys.x, phys.y);
    if (hitElement) {
      // 选中器件，开始拖动
      const c = this.toCanvas(hitElement.x, hitElement.y);
      this.setData({
        selectedElementId: hitElement.id,
        isDragging: true,
        dragElementId: hitElement.id,
        dragOffsetX: canvasPos.x - c.x,
        dragOffsetY: canvasPos.y - c.y,
        paramPanelVisible: true
      });
    } else {
      // 点击空白，取消选中
      this.setData({ selectedElementId: null, paramPanelVisible: false });
    }

    this.draw();
  },

  onCanvasTouchMove(e) {
    if (!this.data.isDragging || !this.data.dragElementId) return;

    const touch = e.touches[0];
    const canvasPos = this.pageToCanvas(touch.x, touch.y);
    const phys = this.toPhysics(
      canvasPos.x - this.data.dragOffsetX,
      canvasPos.y - this.data.dragOffsetY
    );

    // 网格吸附
    const snappedX = this.snapToGrid(phys.x);
    const snappedY = this.snapToGrid(phys.y);

    // 更新器件位置
    const elements = this.data.elements.map(el => {
      if (el.id === this.data.dragElementId) {
        return { ...el, x: snappedX, y: snappedY };
      }
      return el;
    });

    this.setData({ elements });
    this.draw();
  },

  onCanvasTouchEnd(e) {
    if (this.data.isDragging) {
      this.setData({ isDragging: false, dragElementId: null });
    }
  },

  // ===== 器件放置 =====
  placeElement(type, x, y) {
    const id = `el_${++this.elementIdCounter}_${Date.now()}`;
    // 网格吸附
    const snappedX = this.snapToGrid(x);
    const snappedY = this.snapToGrid(y);
    let element = {
      id,
      type,
      x: snappedX,
      y: snappedY,
      params: {}
    };

    // 根据类型设置默认参数
    switch (type) {
      case 'convex-lens':
        element.params = { focalLength: 100, aperture: 120 };
        break;
      case 'concave-lens':
        element.params = { focalLength: -100, aperture: 120 };
        break;
      case 'plane-mirror':
        element.params = { angle: 0, length: 180 };
        break;
      case 'object':
        element.params = { height: 60 };
        break;
    }

    const elements = [...this.data.elements, element];
    this.setData({
      elements,
      selectedTool: null,
      isPlacing: false,
      selectedElementId: id,
      paramPanelVisible: true
    });
    this.draw();
  },

  // ===== 碰撞检测：检测物理坐标是否在某个器件上 =====
  hitTestElement(physX, physY) {
    const elements = this.data.elements;
    // 从后往前检测（后绘制的在上面）
    for (let i = elements.length - 1; i >= 0; i--) {
      const el = elements[i];
      if (this.isPointInElement(physX, physY, el)) {
        return el;
      }
    }
    return null;
  },

  isPointInElement(px, py, el) {
    const dx = px - el.x;
    const dy = py - el.y;
    const dist = Math.hypot(dx, dy);

    switch (el.type) {
      case 'convex-lens':
      case 'concave-lens':
        // 透镜热区：中心线附近，垂直方向孔径内，水平方向30px内
        return Math.abs(dx) < 30 && Math.abs(dy) < (el.params.aperture || 120) / 2 + 10;
      case 'plane-mirror':
        // 平面镜热区：线段附近
        const angle = (el.params.angle || 0) * Math.PI / 180;
        const halfLen = (el.params.length || 180) / 2;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        // 将点转换到镜面局部坐标
        const lx = dx * cosA + dy * sinA;
        const ly = -dx * sinA + dy * cosA;
        return Math.abs(lx) < halfLen + 10 && Math.abs(ly) < 20;
      case 'object':
        // 物体热区：竖线附近
        return Math.abs(dx) < 20 && Math.abs(dy) < (el.params.height || 60) / 2 + 10;
    }
    return false;
  },

  // ===== 参数调整 =====
  onParamChange(e) {
    const key = e.currentTarget.dataset.paramKey;
    const value = parseFloat(e.detail.value);
    const elementId = this.data.selectedElementId;
    if (!elementId || isNaN(value)) return;

    const elements = this.data.elements.map(el => {
      if (el.id === elementId) {
        return {
          ...el,
          params: { ...el.params, [key]: value }
        };
      }
      return el;
    });

    this.setData({ elements });
    this.draw();
  },

  // ===== 删除器件 =====
  deleteSelectedElement() {
    const elementId = this.data.selectedElementId;
    if (!elementId) return;

    const elements = this.data.elements.filter(el => el.id !== elementId);
    const rays = this.data.rays.filter(r =>
      r.startElementId !== elementId && r.endElementId !== elementId
    );
    this.setData({
      elements,
      rays,
      selectedElementId: null,
      paramPanelVisible: false
    });
    this.draw();
  },

  // ===== 添加光线 =====
  addRay() {
    // 找到物体和透镜
    const objects = this.data.elements.filter(el => el.type === 'object');
    const lenses = this.data.elements.filter(el =>
      el.type === 'convex-lens' || el.type === 'concave-lens'
    );

    if (objects.length === 0) {
      wx.showToast({ title: '请先放置物体', icon: 'none' });
      return;
    }
    if (lenses.length === 0) {
      wx.showToast({ title: '请先放置透镜', icon: 'none' });
      return;
    }

    const obj = objects[0];
    const lens = lenses[0];
    const f = lens.params.focalLength || 100;
    const objH = obj.params.height || 60;

    // 计算三条特征光线
    const newRays = [];

    // 光线1：从物体顶点平行于光轴 → 过焦点
    newRays.push({
      id: `ray_${Date.now()}_1`,
      startElementId: obj.id,
      endElementId: lens.id,
      type: 'parallel-to-focus',
      color: '#ffa502',
      segments: this.calculateRaySegments(obj, lens, 'parallel-to-focus')
    });

    // 光线2：过光心，方向不变
    newRays.push({
      id: `ray_${Date.now()}_2`,
      startElementId: obj.id,
      endElementId: lens.id,
      type: 'through-center',
      color: '#ff6b6b',
      segments: this.calculateRaySegments(obj, lens, 'through-center')
    });

    // 光线3：过焦点 → 平行出射
    if (lens.type === 'convex-lens') {
      newRays.push({
        id: `ray_${Date.now()}_3`,
        startElementId: obj.id,
        endElementId: lens.id,
        type: 'through-focus',
        color: '#00b894',
        segments: this.calculateRaySegments(obj, lens, 'through-focus')
      });
    }

    const rays = [...this.data.rays, ...newRays];
    this.setData({ rays });
    this.draw();
  },

  // 计算光线路径段
  calculateRaySegments(obj, lens, rayType) {
    const objX = obj.x;
    const objY = obj.y;
    const objH = obj.params.height || 60;
    const lensX = lens.x;
    const lensY = lens.y;
    const f = lens.params.focalLength || 100;
    const canvasW = this.data.canvasWidth;
    const canvasH = this.data.canvasHeight;
    // 物理坐标边界
    const maxPhysX = canvasW / 2;
    const minPhysX = -canvasW / 2;
    const maxPhysY = canvasH / 2;

    const segments = [];
    const topY = objY + objH / 2; // 物体顶点（物理坐标y向上）

    switch (rayType) {
      case 'parallel-to-focus': {
        // 从物体顶点平行入射到透镜，然后过焦点
        const incidentEnd = { x: lensX, y: topY };
        segments.push({ from: { x: objX, y: topY }, to: incidentEnd, type: 'incident' });

        // 出射方向：过焦点
        const focusY = lensY; // 焦点在光轴上（简化：假设光轴y=0）
        const focusX = lensX + f;
        const dx = focusX - lensX;
        const dy = focusY - topY;
        // 延长出射线到画布边缘
        const t = (maxPhysX - lensX) / (dx || 1);
        const exitEnd = { x: maxPhysX, y: topY + dy * t };
        segments.push({ from: incidentEnd, to: exitEnd, type: 'refracted' });
        break;
      }
      case 'through-center': {
        // 过光心，直线传播
        const lensCenter = { x: lensX, y: lensY };
        segments.push({ from: { x: objX, y: topY }, to: lensCenter, type: 'incident' });

        // 延长线
        const dx = maxPhysX - lensX;
        const dy = (topY - lensY) / (objX - lensX) * dx;
        const exitEnd = { x: maxPhysX, y: lensY + dy };
        segments.push({ from: lensCenter, to: exitEnd, type: 'refracted' });
        break;
      }
      case 'through-focus': {
        // 从物体顶点出发，通过透镜左侧焦点，然后平行出射
        const focusX = lensX - f;
        const focusY = lensY;
        // 入射到透镜
        segments.push({ from: { x: objX, y: topY }, to: { x: lensX, y: topY }, type: 'incident' });
        // 平行出射
        segments.push({ from: { x: lensX, y: topY }, to: { x: maxPhysX, y: topY }, type: 'refracted' });
        break;
      }
    }

    return segments;
  },

  // ===== 添加辅助线 =====
  addAuxiliaryLines() {
    const lens = this.data.elements.find(el =>
      el.type === 'convex-lens' || el.type === 'concave-lens'
    );
    if (!lens) {
      wx.showToast({ title: '请先放置透镜', icon: 'none' });
      return;
    }

    const f = lens.params.focalLength || 100;
    const lensX = lens.x;
    const lensY = lens.y;
    const canvasW = this.data.canvasWidth;
    const canvasH = this.data.canvasHeight;

    // 添加焦点标记作为特殊元素（不可拖动，但可显示/隐藏）
    const auxElements = [];

    // 焦点 F
    auxElements.push({
      id: `focus_f_${Date.now()}`,
      type: 'focus-point',
      x: lensX - f,
      y: lensY,
      label: 'F',
      params: {}
    });

    // 焦点 F'
    auxElements.push({
      id: `focus_fp_${Date.now()}`,
      type: 'focus-point',
      x: lensX + f,
      y: lensY,
      label: "F'",
      params: {}
    });

    const elements = [...this.data.elements, ...auxElements];
    this.setData({ elements });
    this.draw();
  },

  // ===== 绘制主函数 =====
  draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.data.canvasWidth;
    const h = this.data.canvasHeight;

    // 清空
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, w, h);

    // 网格和光轴
    this.drawGrid(ctx, w, h);
    this.drawOpticalAxis(ctx, w, h);

    // 绘制所有器件
    this.data.elements.forEach(el => {
      this.drawElement(ctx, el);
    });

    // 绘制所有光线
    this.data.rays.forEach(ray => {
      this.drawRay(ctx, ray);
    });

    // 绘制选中高亮
    if (this.data.selectedElementId) {
      const selected = this.data.elements.find(el => el.id === this.data.selectedElementId);
      if (selected) {
        this.drawSelectionHighlight(ctx, selected);
      }
    }

    // 绘制放置预览
    if (this.data.isPlacing && this.data.selectedTool) {
      // 预览由触摸事件处理，不需要额外绘制
    }
  },

  drawGrid(ctx, w, h) {
    const gridSize = 50;
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    // 绘制网格交点（吸附点）
    ctx.fillStyle = '#dee2e6';
    for (let x = 0; x <= w; x += gridSize) {
      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  },

  drawOpticalAxis(ctx, w, h) {
    const cy = h / 2;
    const cx = w / 2;
    // 主光轴（更粗更醒目）
    ctx.strokeStyle = '#adb5bd';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    // 光轴刻度标记
    ctx.fillStyle = '#adb5bd';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    const gridSize = 50;
    for (let x = 0; x <= w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, cy - 4);
      ctx.lineTo(x, cy + 4);
      ctx.stroke();
      // 刻度标注（以画布中心为原点）
      const physX = Math.round((x - cx) / gridSize) * gridSize;
      if (physX !== 0 && Math.abs(physX) <= 400) {
        ctx.fillText(String(physX), x, cy + 16);
      }
    }
    ctx.textAlign = 'right';
    ctx.font = '12px sans-serif';
    ctx.fillText('光轴', w - 10, cy - 12);
    ctx.textAlign = 'left';
  },

  // ===== 绘制器件 =====
  drawElement(ctx, el) {
    switch (el.type) {
      case 'convex-lens':
        this.drawConvexLens(ctx, el);
        break;
      case 'concave-lens':
        this.drawConcaveLens(ctx, el);
        break;
      case 'plane-mirror':
        this.drawPlaneMirror(ctx, el);
        break;
      case 'object':
        this.drawObject(ctx, el);
        break;
      case 'focus-point':
        this.drawFocusPoint(ctx, el);
        break;
    }
  },

  drawConvexLens(ctx, el) {
    const { x, y, params } = el;
    const c = this.toCanvas(x, y);
    const halfA = (params.aperture || 120) / 2;
    const curvature = Math.min(25, halfA * 0.4);
    const f = params.focalLength || 100;

    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 2.5;
    ctx.fillStyle = 'rgba(173, 216, 230, 0.2)';
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

    // 中心线
    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(c.x, c.y - halfA - 4);
    ctx.lineTo(c.x, c.y + halfA + 4);
    ctx.stroke();

    // 焦距标注
    ctx.fillStyle = '#495057';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`f=${f}mm`, c.x, c.y + halfA + 22);
    ctx.textAlign = 'left';
  },

  drawConcaveLens(ctx, el) {
    const { x, y, params } = el;
    const c = this.toCanvas(x, y);
    const halfA = (params.aperture || 120) / 2;
    const curvature = Math.min(20, halfA * 0.3);
    const f = params.focalLength || -100;
    const absF = Math.abs(f);

    ctx.strokeStyle = '#6c5ce7';
    ctx.lineWidth = 2.5;
    ctx.fillStyle = 'rgba(173, 216, 230, 0.15)';
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

    ctx.beginPath();
    ctx.moveTo(c.x, c.y - halfA - 4);
    ctx.lineTo(c.x, c.y + halfA + 4);
    ctx.stroke();

    ctx.fillStyle = '#6c5ce7';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`f=-${absF}mm`, c.x, c.y + halfA + 22);
    ctx.textAlign = 'left';
  },

  drawPlaneMirror(ctx, el) {
    const { x, y, params } = el;
    const angle = (params.angle || 0) * Math.PI / 180;
    const halfLen = (params.length || 180) / 2;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const x1 = x - halfLen * cosA;
    const y1 = y - halfLen * sinA;
    const x2 = x + halfLen * cosA;
    const y2 = y + halfLen * sinA;
    const p1 = this.toCanvas(x1, y1);
    const p2 = this.toCanvas(x2, y2);

    ctx.strokeStyle = '#00b894';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // 背面短斜线
    const nx = -sinA;
    const ny = cosA;
    const numTicks = 7;
    for (let i = 0; i <= numTicks; i++) {
      const t = i / numTicks;
      const bx = p1.x + t * (p2.x - p1.x);
      const by = p1.y + t * (p2.y - p1.y);
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + 5 * nx, by + 5 * ny);
      ctx.stroke();
    }
  },

  drawObject(ctx, el) {
    const { x, y, params } = el;
    const height = params.height || 60;
    const halfH = height / 2;
    const top = this.toCanvas(x, y + halfH);
    const bottom = this.toCanvas(x, y - halfH);

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

  drawFocusPoint(ctx, el) {
    const c = this.toCanvas(el.x, el.y);
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff6b6b';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(el.label || 'F', c.x, c.y - 10);
    ctx.textAlign = 'left';
  },

  drawArrowHead(ctx, x, y, angle, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * Math.cos(angle - Math.PI / 6), y - size * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x - size * Math.cos(angle + Math.PI / 6), y - size * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  },

  // ===== 绘制光线 =====
  drawRay(ctx, ray) {
    if (!ray.segments || ray.segments.length === 0) return;

    ctx.strokeStyle = ray.color || '#ffa502';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);

    ray.segments.forEach((seg, idx) => {
      const from = this.toCanvas(seg.from.x, seg.from.y);
      const to = this.toCanvas(seg.to.x, seg.to.y);

      if (seg.type === 'virtual') {
        ctx.setLineDash([6, 4]);
      } else {
        ctx.setLineDash([]);
      }

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();

      // 入射段画箭头
      if (idx === 0) {
        const angle = Math.atan2(to.y - from.y, to.x - from.x);
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2;
        ctx.fillStyle = ray.color || '#ffa502';
        this.drawArrowHead(ctx, mx, my, angle, 6);
      }
    });

    ctx.setLineDash([]);
  },

  // ===== 绘制选中高亮 =====
  drawSelectionHighlight(ctx, el) {
    const c = this.toCanvas(el.x, el.y);
    ctx.strokeStyle = '#4a69bd';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);

    switch (el.type) {
      case 'convex-lens':
      case 'concave-lens': {
        const halfA = (el.params.aperture || 120) / 2;
        ctx.strokeRect(c.x - 35, c.y - halfA - 10, 70, halfA * 2 + 20);
        break;
      }
      case 'plane-mirror': {
        const angle = (el.params.angle || 0) * Math.PI / 180;
        const halfLen = (el.params.length || 180) / 2;
        const x1 = el.x - halfLen * Math.cos(angle);
        const y1 = el.y - halfLen * Math.sin(angle);
        const x2 = el.x + halfLen * Math.cos(angle);
        const y2 = el.y + halfLen * Math.sin(angle);
        const p1 = this.toCanvas(x1, y1);
        const p2 = this.toCanvas(x2, y2);
        // 简化高亮：以中心为圆
        ctx.beginPath();
        ctx.arc(c.x, c.y, halfLen + 10, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }
      case 'object': {
        const h = (el.params.height || 60) / 2 + 15;
        ctx.strokeRect(c.x - 25, c.y - h, 50, h * 2);
        break;
      }
    }

    ctx.setLineDash([]);
  },

  // ===== 操作按钮 =====
  clearCanvas() {
    this.setData({
      elements: [],
      rays: [],
      selectedElementId: null,
      selectedTool: null,
      selectedToolName: null,
      isPlacing: false,
      paramPanelVisible: false,
      validationResult: null,
      quizScore: -1
    });
    this.draw();
  },

  backToList() {
    this.setData({
      currentQuiz: null,
      currentQuizIndex: -1,
      elements: [],
      rays: [],
      selectedElementId: null,
      selectedTool: null,
      selectedToolName: null,
      isPlacing: false,
      paramPanelVisible: false,
      quizScore: -1,
      validationResult: null
    });
  },

  nextQuiz() {
    const nextIndex = this.data.currentQuizIndex + 1;
    if (nextIndex < this.data.quizList.length) {
      this.loadQuiz(nextIndex);
    }
  },

  quitQuiz() {
    this.backToList();
  },

  // ===== 提交与验证 =====
  submitDrawing() {
    const quiz = this.data.currentQuiz;
    if (!quiz) return;

    const result = this.validateQuiz(quiz);
    this.setData({
      validationResult: result,
      quizScore: result.score
    });

    const app = getApp();
    if (app && app.recordAnswer) {
      app.recordAnswer(quiz.id, result.score >= 60, 'drawing', '光学绘图', quiz.sceneId);
    }
  },

  validateQuiz(quiz) {
    const sceneId = quiz.sceneId;
    const params = quiz.sceneParams || {};

    switch (sceneId) {
      case 'convexLens':
        return this.validateConvexLens(quiz, params);
      case 'planeMirror':
        return this.validatePlaneMirror(quiz, params);
      case 'concaveLens':
        return this.validateConcaveLens(quiz, params);
      default:
        return { isCorrect: false, score: 0, message: '暂不支持该题目的自动验证' };
    }
  },

  // ===== 凸透镜成像验证（基于器件位置） =====
  validateConvexLens(quiz, params) {
    const u = params.objectDistance;
    const f = params.focalLength;
    const expectedLensX = params.lensX;
    const expectedObjX = expectedLensX - u;
    const v = Math.abs(u - f) < 0.5 ? (u > f ? 99999 : -99999) : (u * f) / (u - f);
    const expectedImgX = expectedLensX + v;
    const expectedImgHeight = params.objectHeight * Math.abs(-v / u);

    const objects = this.data.elements.filter(el => el.type === 'object');
    const lenses = this.data.elements.filter(el => el.type === 'convex-lens');
    const rays = this.data.rays;

    let details = [];
    let score = 0;

    // 检查物体位置
    if (objects.length > 0) {
      const obj = objects[0];
      const objDist = Math.abs(obj.x - expectedObjX);
      if (objDist < 30) {
        score += 20;
        details.push('✓ 物体位置正确');
      } else if (objDist < 60) {
        score += 10;
        details.push(`~ 物体位置基本正确（偏差 ${Math.round(objDist)}px）`);
      } else {
        details.push(`✗ 物体位置偏差较大（偏差 ${Math.round(objDist)}px）`);
      }
    } else {
      details.push('✗ 未放置物体');
    }

    // 检查透镜位置
    if (lenses.length > 0) {
      const lens = lenses[0];
      const lensDist = Math.abs(lens.x - expectedLensX);
      if (lensDist < 30) {
        score += 20;
        details.push('✓ 透镜位置正确');
      } else if (lensDist < 60) {
        score += 10;
        details.push(`~ 透镜位置基本正确（偏差 ${Math.round(lensDist)}px）`);
      } else {
        details.push(`✗ 透镜位置偏差较大（偏差 ${Math.round(lensDist)}px）`);
      }

      // 检查焦距
      const fDiff = Math.abs((lens.params.focalLength || 100) - f);
      if (fDiff < 15) {
        score += 10;
        details.push('✓ 焦距设置正确');
      } else {
        details.push(`✗ 焦距设置错误（应为 ${f}mm）`);
      }
    } else {
      details.push('✗ 未放置凸透镜');
    }

    // 检查光线
    const hasRays = rays.length >= 2;
    if (hasRays) {
      score += 30;
      details.push(`✓ 已绘制 ${rays.length} 条光线`);
    } else if (rays.length > 0) {
      score += 10;
      details.push(`~ 仅绘制 ${rays.length} 条光线（建议至少2条）`);
    } else {
      details.push('✗ 未绘制任何光线');
    }

    // 检查是否像位置合理
    const hasImageRay = rays.some(r => r.segments && r.segments.length >= 2);
    if (hasImageRay) {
      score += 20;
      details.push('✓ 光线能够成像');
    } else {
      details.push('✗ 光线未正确延伸');
    }

    const totalScore = Math.min(score, 100);
    const isCorrect = totalScore >= 60;

    return {
      isCorrect,
      score: totalScore,
      message: isCorrect ? '光路图基本正确，继续加油！' : '光路图有错误，请检查器件位置和光线',
      details
    };
  },

  // ===== 平面镜反射验证 =====
  validatePlaneMirror(quiz, params) {
    const expectedMirrorX = params.mirrorX;
    const expectedMirrorAngle = params.mirrorAngle;
    const incidentAngleDeg = params.incidentAngle;

    const mirrors = this.data.elements.filter(el => el.type === 'plane-mirror');
    const rays = this.data.rays;

    let details = [];
    let score = 0;

    // 检查平面镜
    if (mirrors.length > 0) {
      const mirror = mirrors[0];
      const mirrorDist = Math.abs(mirror.x - expectedMirrorX);
      if (mirrorDist < 30) {
        score += 30;
        details.push('✓ 平面镜位置正确');
      } else {
        details.push(`✗ 平面镜位置偏差（偏差 ${Math.round(mirrorDist)}px）`);
      }
    } else {
      details.push('✗ 未放置平面镜');
    }

    // 检查光线
    if (rays.length >= 2) {
      score += 40;
      details.push(`✓ 已绘制入射光和反射光（${rays.length} 条）`);
    } else if (rays.length > 0) {
      score += 20;
      details.push('~ 仅绘制一条光线');
    } else {
      details.push('✗ 未绘制任何光线');
    }

    // 检查是否有法线（通过辅助线或光线判断）
    const hasNormal = rays.some(r => r.type === 'through-center');
    if (hasNormal) {
      score += 30;
      details.push('✓ 法线已标注');
    } else {
      details.push('✗ 建议标注法线');
    }

    const totalScore = Math.min(score, 100);
    const isCorrect = totalScore >= 60;

    return {
      isCorrect,
      score: totalScore,
      message: isCorrect ? '反射光路图正确！' : '请检查入射光、反射光和镜面的位置',
      details
    };
  },

  // ===== 凹透镜发散验证 =====
  validateConcaveLens(quiz, params) {
    const f = params.focalLength;
    const expectedLensX = params.lensX;

    const lenses = this.data.elements.filter(el => el.type === 'concave-lens');
    const objects = this.data.elements.filter(el => el.type === 'object');
    const rays = this.data.rays;

    let details = [];
    let score = 0;

    if (lenses.length > 0) {
      const lens = lenses[0];
      const lensDist = Math.abs(lens.x - expectedLensX);
      if (lensDist < 30) {
        score += 25;
        details.push('✓ 凹透镜位置正确');
      } else {
        details.push(`✗ 凹透镜位置偏差（偏差 ${Math.round(lensDist)}px）`);
      }

      const fDiff = Math.abs(Math.abs(lens.params.focalLength || -100) - Math.abs(f));
      if (fDiff < 15) {
        score += 15;
        details.push('✓ 焦距设置正确');
      }
    } else {
      details.push('✗ 未放置凹透镜');
    }

    if (objects.length > 0) {
      score += 20;
      details.push('✓ 已放置物体');
    } else {
      details.push('✗ 未放置物体');
    }

    if (rays.length >= 2) {
      score += 40;
      details.push(`✓ 已绘制 ${rays.length} 条发散光线`);
    } else if (rays.length > 0) {
      score += 20;
      details.push('~ 仅绘制一条光线');
    } else {
      details.push('✗ 未绘制光线');
    }

    const totalScore = Math.min(score, 100);
    const isCorrect = totalScore >= 60;

    return {
      isCorrect,
      score: totalScore,
      message: isCorrect ? '凹透镜发散光路正确！' : '请检查光线是否从平行入射变为发散',
      details
    };
  }
});
