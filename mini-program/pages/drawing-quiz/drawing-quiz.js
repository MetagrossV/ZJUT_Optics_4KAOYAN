// 光学绘图题系统
const dataScenes = require('../../data/data_optical_scenes.js');

Page({
  data: {
    quizList: [],
    currentQuiz: null,
    currentQuizIndex: -1,
    currentTool: 'ray',
    canvasWidth: 750,
    canvasHeight: 600,
    dpr: 1,
    quizScore: -1,
    validationResult: null
  },

  canvas: null,
  ctx: null,
  userDrawings: [], // 用户绘制元素列表
  isDrawing: false,
  tempStroke: [], // 当前笔触的物理坐标点

  onLoad() {
    const dpr = wx.getSystemInfoSync().pixelRatio || 1;
    this.setData({ dpr });
    this.loadQuizList();
  },

  onReady() {
    this.initCanvas();
    this.getCanvasOffset();
  },

  getCanvasOffset() {
    const query = wx.createSelectorQuery().in(this);
    query.select('#drawingCanvas').boundingClientRect(rect => {
      if (rect) {
        this.canvasOffsetX = rect.left;
        this.canvasOffsetY = rect.top;
      }
    }).exec();
  },

  pageToCanvas(pageX, pageY) {
    const offsetX = this.canvasOffsetX || 0;
    const offsetY = this.canvasOffsetY || 0;
    return { x: pageX - offsetX, y: pageY - offsetY };
  },

  onShow() {
    if (this.ctx && this.data.currentQuiz) {
      this.draw();
    }
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
    this.userDrawings = [];
    this.setData({
      currentQuiz: quiz,
      currentQuizIndex: index,
      currentTool: 'ray',
      quizScore: -1,
      validationResult: null
    }, () => {
      if (this.ctx) this.draw();
    });
  },

  // ===== 工具选择 =====
  selectTool(e) {
    const tool = e.currentTarget.dataset.tool;
    this.setData({ currentTool: tool });
  },

  // ===== 坐标转换 =====
  toCanvas(physX, physY) {
    const cx = this.data.canvasWidth / 2;
    const cy = this.data.canvasHeight / 2;
    return { x: cx + physX, y: cy - physY };
  },

  toPhysics(canvasX, canvasY) {
    const cx = this.data.canvasWidth / 2;
    const cy = this.data.canvasHeight / 2;
    return { x: canvasX - cx, y: cy - canvasY };
  },

  // ===== 触摸事件 =====
  onCanvasTouchStart(e) {
    const touch = e.touches[0];
    const canvasPos = this.pageToCanvas(touch.x, touch.y);
    const phys = this.toPhysics(canvasPos.x, canvasPos.y);
    this.isDrawing = true;
    this.tempStroke = [phys];
  },

  onCanvasTouchMove(e) {
    if (!this.isDrawing) return;
    const touch = e.touches[0];
    const canvasPos = this.pageToCanvas(touch.x, touch.y);
    const phys = this.toPhysics(canvasPos.x, canvasPos.y);
    this.tempStroke.push(phys);
    // 实时绘制预览
    this.draw();
    this.drawPreview();
  },

  onCanvasTouchEnd(e) {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    if (this.tempStroke.length < 2) {
      this.tempStroke = [];
      this.draw();
      return;
    }
    // 保存用户绘制
    this.saveUserStroke();
    this.tempStroke = [];
    this.draw();
  },

  // 保存当前笔触为用户绘制元素
  saveUserStroke() {
    const tool = this.data.currentTool;
    const points = [...this.tempStroke];
    const start = points[0];
    const end = points[points.length - 1];

    let element = null;
    if (tool === 'ray') {
      // 光线：简化为从起点到终点的线段
      element = {
        type: 'ray',
        points: points,
        startPoint: start,
        endPoint: end,
        id: `user_ray_${Date.now()}`
      };
    } else if (tool === 'object') {
      // 物体：简化为竖线
      element = {
        type: 'object',
        points: points,
        startPoint: start,
        endPoint: end,
        id: `user_obj_${Date.now()}`
      };
    } else if (tool === 'image') {
      element = {
        type: 'image',
        points: points,
        startPoint: start,
        endPoint: end,
        id: `user_img_${Date.now()}`
      };
    } else if (tool === 'normal') {
      element = {
        type: 'normal',
        points: points,
        startPoint: start,
        endPoint: end,
        id: `user_norm_${Date.now()}`
      };
    } else if (tool === 'arrow') {
      element = {
        type: 'arrow',
        points: points,
        startPoint: start,
        endPoint: end,
        id: `user_arrow_${Date.now()}`
      };
    } else if (tool === 'eraser') {
      // 橡皮擦：删除靠近该笔触的已有元素
      this.eraseNear(points);
      return;
    }

    if (element) {
      this.userDrawings.push(element);
    }
  },

  // 橡皮擦：删除距离给定笔触较近的绘制元素
  eraseNear(strokePoints) {
    if (!strokePoints.length) return;
    const eraseCenter = strokePoints[Math.floor(strokePoints.length / 2)];
    const threshold = 40; // 擦除半径

    this.userDrawings = this.userDrawings.filter(d => {
      // 检查元素的起点和终点是否远离擦除中心
      const s = d.startPoint;
      const e = d.endPoint;
      const ds = Math.hypot(s.x - eraseCenter.x, s.y - eraseCenter.y);
      const de = Math.hypot(e.x - eraseCenter.x, e.y - eraseCenter.y);
      return ds > threshold && de > threshold;
    });
  },

  // 绘制预览（当前笔触）
  drawPreview() {
    if (!this.ctx || this.tempStroke.length < 2) return;
    const ctx = this.ctx;
    const tool = this.data.currentTool;

    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.lineWidth = 2;

    const points = this.tempStroke.map(p => this.toCanvas(p.x, p.y));

    if (tool === 'ray') {
      ctx.strokeStyle = '#ffa502';
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    } else if (tool === 'normal') {
      ctx.strokeStyle = '#ff6b6b';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      ctx.strokeStyle = '#495057';
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.stroke();
    }

    ctx.restore();
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

    // 绘制预设场景（作为题目背景）
    if (this.data.currentQuiz) {
      this.drawQuizScene(ctx);
    }

    // 绘制用户绘制内容
    this.drawUserContent(ctx);
  },

  drawGrid(ctx, w, h) {
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 0.5;
    const gridSize = 50;
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
  },

  drawOpticalAxis(ctx, w, h) {
    const cy = h / 2;
    ctx.strokeStyle = '#adb5bd';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#6c757d';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('光轴', w - 10, cy - 8);
    ctx.textAlign = 'left';
  },

  // 绘制题目预设场景（仅元件，不画光线答案）
  drawQuizScene(ctx) {
    const quiz = this.data.currentQuiz;
    if (!quiz || !quiz.sceneId) return;
    const scene = dataScenes.SCENES[quiz.sceneId];
    if (!scene) return;
    const params = quiz.sceneParams || {};

    // 绘制场景元件（物体、透镜/镜子等，但不画光线和像）
    if (scene.elements) {
      scene.elements.forEach(elem => {
        // 绘图题中不预先显示像，让用户自己画
        if (elem.type === 'image') return;
        // 不预先画光线，让用户自己画
        if (elem.type === 'normal-line') return;
        this.drawSceneElement(ctx, elem, params);
      });
    }
  },

  // 绘制场景元件（复用光学模拟的绘制方法）
  drawSceneElement(ctx, element, params) {
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
    }
  },

  // ===== 绘制用户内容 =====
  drawUserContent(ctx) {
    this.userDrawings.forEach(d => {
      this.drawUserElement(ctx, d);
    });
  },

  drawUserElement(ctx, element) {
    const s = this.toCanvas(element.startPoint.x, element.startPoint.y);
    const e = this.toCanvas(element.endPoint.x, element.endPoint.y);

    switch (element.type) {
      case 'ray':
        ctx.strokeStyle = '#ffa502';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        // 箭头
        ctx.fillStyle = '#ffa502';
        const angle = Math.atan2(e.y - s.y, e.x - s.x);
        const mx = (s.x + e.x) / 2;
        const my = (s.y + e.y) / 2;
        this.drawArrowHead(ctx, mx, my, angle, 7);
        break;

      case 'object':
        ctx.strokeStyle = '#e03131';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        ctx.fillStyle = '#e03131';
        // 箭头向上
        const upAngle = Math.atan2(s.y - e.y, s.x - e.x) - Math.PI / 2;
        this.drawArrowHead(ctx, s.x, s.y, upAngle, 7);
        break;

      case 'image':
        ctx.strokeStyle = '#1971c2';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#1971c2';
        const imgAngle = Math.atan2(s.y - e.y, s.x - e.x) - Math.PI / 2;
        this.drawArrowHead(ctx, s.x, s.y, imgAngle, 7);
        break;

      case 'normal':
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ff6b6b';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('N', e.x + 4, e.y);
        break;

      case 'arrow':
        ctx.fillStyle = '#495057';
        const arrowAngle = Math.atan2(e.y - s.y, e.x - s.x);
        this.drawArrowHead(ctx, e.x, e.y, arrowAngle, 10);
        break;
    }
  },

  drawArrowHead(ctx, x, y, angle, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * Math.cos(angle - Math.PI / 6), y - size * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x - size * Math.cos(angle + Math.PI / 6), y - size * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  },

  // ===== 场景元件绘制（简化版） =====
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
    ctx.fillStyle = '#e03131';
    this.drawArrowHead(ctx, top.x, top.y, -Math.PI / 2, 8);
    ctx.fillStyle = '#e03131';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('A', top.x - 6, top.y + 4);
    ctx.fillText('B', bottom.x - 6, bottom.y + 14);
    ctx.textAlign = 'left';
  },

  drawConvexLensSymbol(ctx, pos) {
    const { x, y = 0, focalLength = 100, aperture = 120 } = pos;
    const c = this.toCanvas(x, y);
    const halfA = aperture / 2;
    const curvature = Math.min(25, halfA * 0.4);
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
    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(c.x, c.y - halfA - 4);
    ctx.lineTo(c.x, c.y + halfA + 4);
    ctx.stroke();
    ctx.fillStyle = '#495057';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`f = ${focalLength}mm`, c.x, c.y + halfA + 22);
    ctx.textAlign = 'left';
  },

  drawConcaveLensSymbol(ctx, pos) {
    const { x, y = 0, focalLength = -100, aperture = 120 } = pos;
    const c = this.toCanvas(x, y);
    const halfA = aperture / 2;
    const absF = Math.abs(focalLength);
    const curvature = Math.min(20, halfA * 0.3);
    ctx.strokeStyle = '#495057';
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
    ctx.fillStyle = '#495057';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`f = -${absF}mm`, c.x, c.y + halfA + 22);
    ctx.textAlign = 'left';
  },

  drawPlaneMirrorSymbol(ctx, pos) {
    const { x, y = 0, angle = 0, length = 180 } = pos;
    const halfLen = length / 2;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const x1 = x - halfLen * cosA;
    const y1 = y - halfLen * sinA;
    const x2 = x + halfLen * cosA;
    const y2 = y + halfLen * sinA;
    const p1 = this.toCanvas(x1, y1);
    const p2 = this.toCanvas(x2, y2);
    ctx.strokeStyle = '#495057';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
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
  },

  // ===== 操作按钮 =====
  clearCanvas() {
    this.userDrawings = [];
    this.setData({ validationResult: null, quizScore: -1 });
    this.draw();
  },

  undoLast() {
    this.userDrawings.pop();
    this.setData({ validationResult: null, quizScore: -1 });
    this.draw();
  },

  backToList() {
    this.setData({
      currentQuiz: null,
      currentQuizIndex: -1,
      quizScore: -1,
      validationResult: null
    });
    this.userDrawings = [];
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

    // 保存成绩到全局
    const app = getApp();
    if (app && app.recordAnswer) {
      app.recordAnswer(quiz.id, result.score >= 60, 'drawing', '光学绘图', quiz.sceneId);
    }
  },

  // ===== 验证主函数 =====
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

  // ===== 凸透镜成像验证 =====
  validateConvexLens(quiz, params) {
    const u = params.objectDistance;
    const f = params.focalLength;
    const lensX = params.lensX;
    const objX = lensX - u;
    const v = (u * f) / (u - f);
    const imgX = lensX + v;
    const mag = -v / u;
    const expectedImgHeight = params.objectHeight * Math.abs(mag);
    const expectedImgTopY = mag > 0 ? expectedImgHeight / 2 : -expectedImgHeight / 2;
    const expectedImgBottomY = mag > 0 ? -expectedImgHeight / 2 : expectedImgHeight / 2;

    const rays = this.userDrawings.filter(d => d.type === 'ray');
    const images = this.userDrawings.filter(d => d.type === 'image');

    let details = [];
    let correctRays = 0;
    let rayDetails = [];

    // 检查每条光线
    for (const ray of rays) {
      // 1. 是否从物体附近出发
      const startNearObj = Math.abs(ray.startPoint.x - objX) < 50 &&
        Math.abs(ray.startPoint.y) < params.objectHeight;
      if (!startNearObj) {
        rayDetails.push('• 有一条光线未从物体附近出发');
        continue;
      }

      // 2. 是否通过透镜附近
      const passesLens = this.segmentPassesNearPoint(ray, lensX, 0, 35);
      if (!passesLens) {
        rayDetails.push('• 有一条光线未通过透镜');
        continue;
      }

      // 3. 出射后是否通过像点附近（容差范围内）
      // 光线从透镜到像点的方向
      const passesImage = this.segmentPassesNearPoint(ray, imgX, 0, 50);
      if (passesImage) {
        correctRays++;
      } else {
        rayDetails.push('• 有一条光线未到达正确像位置');
      }
    }

    // 评分
    const rayScore = Math.min(correctRays, 3) * 25;

    // 检查像的位置
    let imageScore = 0;
    let imageMessage = '';
    if (images.length === 0) {
      imageMessage = '未画出像的位置';
    } else {
      const img = images[0];
      // 检查像的竖线是否接近理论位置
      const imgXavg = (img.startPoint.x + img.endPoint.x) / 2;
      const imgDist = Math.abs(imgXavg - imgX);
      const imgHeight = Math.abs(img.startPoint.y - img.endPoint.y);
      const heightDiff = Math.abs(imgHeight - expectedImgHeight);

      if (imgDist < 25 && heightDiff < 20) {
        imageScore = 25;
        imageMessage = '像的位置和大小完全正确';
      } else if (imgDist < 50 && heightDiff < 40) {
        imageScore = 15;
        imageMessage = `像的位置基本正确（偏差 ${Math.round(imgDist)}px）`;
      } else if (imgDist < 80) {
        imageScore = 5;
        imageMessage = `像的位置偏差较大（偏差 ${Math.round(imgDist)}px）`;
      } else {
        imageMessage = `像的位置错误（偏差 ${Math.round(imgDist)}px）`;
      }
    }

    const totalScore = Math.min(rayScore + imageScore, 100);
    const isCorrect = totalScore >= 60;

    details.push(`检测到 ${rays.length} 条光线，其中 ${correctRays} 条正确`);
    if (rayDetails.length > 0) details.push(...rayDetails.slice(0, 2));
    details.push(imageMessage);

    return {
      isCorrect,
      score: totalScore,
      message: isCorrect ? '光路图基本正确，继续加油！' : '光路图有错误，请检查特征光线和像的位置',
      details
    };
  },

  // ===== 平面镜反射验证 =====
  validatePlaneMirror(quiz, params) {
    const mirrorX = params.mirrorX;
    const mirrorAngle = params.mirrorAngle * Math.PI / 180;
    const incidentAngleDeg = params.incidentAngle;

    const rays = this.userDrawings.filter(d => d.type === 'ray');
    const normals = this.userDrawings.filter(d => d.type === 'normal');

    let details = [];
    let incidentFound = false;
    let reflectedFound = false;
    let normalFound = false;
    let angleCorrect = false;

    // 检查入射光线和反射光线
    for (const ray of rays) {
      const mid = {
        x: (ray.startPoint.x + ray.endPoint.x) / 2,
        y: (ray.startPoint.y + ray.endPoint.y) / 2
      };
      const nearMirror = this.pointNearMirror(mid, mirrorX, 0, mirrorAngle, 50);
      if (!nearMirror) continue;

      const dx = ray.endPoint.x - ray.startPoint.x;
      const dy = ray.endPoint.y - ray.startPoint.y;
      const rayAngle = Math.atan2(dy, dx); // 光线方向（物理坐标）
      // 物理坐标中 y 向上，角度正常

      // 入射光：从左侧射向镜面
      if (dx > 0 && !incidentFound) {
        incidentFound = true;
      }
      // 反射光：从镜面向左侧离开
      if (dx < 0 && !reflectedFound) {
        reflectedFound = true;
      }
    }

    // 检查法线
    if (normals.length > 0) {
      normalFound = true;
      // 检查法线是否大致垂直于镜面
      const n = normals[0];
      const ndx = n.endPoint.x - n.startPoint.x;
      const ndy = n.endPoint.y - n.startPoint.y;
      const normalAngle = Math.atan2(ndy, ndx);
      // 镜面法线角度应为 mirrorAngle + PI/2
      const expectedNormal = mirrorAngle + Math.PI / 2;
      const angleDiff = Math.abs(this.normalizeAngle(normalAngle - expectedNormal));
      if (angleDiff < 15 * Math.PI / 180) {
        angleCorrect = true;
      }
    }

    const score = (incidentFound ? 30 : 0) + (reflectedFound ? 30 : 0) +
      (normalFound ? 20 : 0) + (angleCorrect ? 20 : 0);
    const isCorrect = score >= 60;

    details.push(incidentFound ? '✓ 入射光线正确' : '✗ 缺少入射光线或位置不对');
    details.push(reflectedFound ? '✓ 反射光线正确' : '✗ 缺少反射光线或位置不对');
    details.push(normalFound ? '✓ 法线已画出' : '✗ 未画法线');
    details.push(angleCorrect ? '✓ 法线角度正确' : '✗ 法线角度有误');

    return {
      isCorrect,
      score,
      message: isCorrect ? '反射光路图正确！' : '请检查入射光、反射光和法线的位置',
      details
    };
  },

  // ===== 凹透镜发散验证 =====
  validateConcaveLens(quiz, params) {
    const f = -params.focalLength;
    const absF = Math.abs(f);
    const lensX = params.lensX;
    const rayOffset = params.rayOffset;

    const rays = this.userDrawings.filter(d => d.type === 'ray');
    const images = this.userDrawings.filter(d => d.type === 'image');

    let correctRays = 0;
    let details = [];

    // 凹透镜：平行光入射 -> 发散，反向延长通过焦点（左侧虚焦点）
    for (const ray of rays) {
      const startY = ray.startPoint.y;
      const startX = ray.startPoint.x;
      // 是否从左侧平行入射（y 接近 rayOffset）
      const isParallel = Math.abs(startY - rayOffset) < 20 || Math.abs(startY + rayOffset) < 20;
      const fromLeft = startX < lensX - 50;
      if (!isParallel || !fromLeft) continue;

      // 是否通过透镜
      const passesLens = this.segmentPassesNearPoint(ray, lensX, startY, 30);
      if (!passesLens) continue;

      // 出射后是否发散（y 随 x 增大而增大）
      const dx = ray.endPoint.x - ray.startPoint.x;
      const dy = ray.endPoint.y - ray.startPoint.y;
      // 发散意味着光线远离光轴
      const diverging = Math.abs(ray.endPoint.y) > Math.abs(startY) + 5;
      if (diverging) {
        correctRays++;
      }
    }

    const rayScore = Math.min(correctRays, 2) * 30;
    let imageScore = 0;

    // 凹透镜成虚像，在物体同侧
    if (images.length > 0) {
      const img = images[0];
      const imgXavg = (img.startPoint.x + img.endPoint.x) / 2;
      // 虚像应在透镜左侧
      if (imgXavg < lensX - 20) {
        imageScore = 20;
      }
    }

    const totalScore = Math.min(rayScore + imageScore + 20, 100); // +20 方向分
    const isCorrect = totalScore >= 60;

    details.push(`检测到 ${rays.length} 条光线，其中 ${correctRays} 条为发散光线`);
    details.push(images.length > 0 ? '✓ 已标注虚像位置' : '✗ 未标注虚像位置');

    return {
      isCorrect,
      score: totalScore,
      message: isCorrect ? '凹透镜发散光路正确！' : '请检查光线是否从平行入射变为发散',
      details
    };
  },

  // ===== 几何工具函数 =====
  segmentPassesNearPoint(segment, px, py, tolerance) {
    // 检查线段是否靠近某点（点到线段的最短距离）
    const x1 = segment.startPoint.x, y1 = segment.startPoint.y;
    const x2 = segment.endPoint.x, y2 = segment.endPoint.y;

    const dx = x2 - x1, dy = y2 - y1;
    const len2 = dx * dx + dy * dy;
    if (len2 < 1e-9) {
      return Math.hypot(x1 - px, y1 - py) < tolerance;
    }

    let t = ((px - x1) * dx + (py - y1) * dy) / len2;
    t = Math.max(0, Math.min(1, t));
    const closestX = x1 + t * dx;
    const closestY = y1 + t * dy;
    const dist = Math.hypot(closestX - px, closestY - py);
    return dist < tolerance;
  },

  pointNearMirror(point, mx, my, mirrorAngle, tolerance) {
    // 检查点是否靠近平面镜
    const cosA = Math.cos(mirrorAngle);
    const sinA = Math.sin(mirrorAngle);
    // 将点投影到镜面坐标系
    const dx = point.x - mx;
    const dy = point.y - my;
    const along = dx * cosA + dy * sinA; // 沿镜面方向
    const across = -dx * sinA + dy * cosA; // 垂直镜面方向
    return Math.abs(across) < tolerance && Math.abs(along) < 100;
  },

  normalizeAngle(angle) {
    // 归一化到 [-PI, PI]
    while (angle > Math.PI) angle -= 2 * Math.PI;
    while (angle < -Math.PI) angle += 2 * Math.PI;
    return angle;
  }
});
