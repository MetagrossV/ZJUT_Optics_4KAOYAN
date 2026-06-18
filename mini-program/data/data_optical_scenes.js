/**
 * 几何光学场景数据文件
 * 定义预设的光学模拟场景和绘图题数据
 */

const SCENES = {
  // 场景1：凸透镜成像
  convexLens: {
    id: 'convexLens',
    name: '凸透镜成像',
    description: '平行光/点光源通过凸透镜的汇聚成像',
    category: 'lens',
    // 画布参数（物理坐标系：x向右，y向上，中心为画布中心）
    canvas: {
      width: 750,
      height: 600,
      scale: 1.0, // 物理像素比
      originX: 375, // 中心X
      originY: 300  // 中心Y（Canvas中y向下，绘制时转换）
    },
    // 可调整参数
    adjustableParams: [
      { id: 'focalLength', name: '焦距 f', unit: 'mm', min: 50, max: 200, default: 100, step: 10 },
      { id: 'objectDistance', name: '物距 u', unit: 'mm', min: 50, max: 400, default: 150, step: 10 },
      { id: 'objectHeight', name: '物高 h', unit: 'mm', min: 20, max: 120, default: 60, step: 5 },
      { id: 'lensX', name: '透镜位置', unit: 'px', min: 200, max: 550, default: 375, step: 10 }
    ],
    // 光学元件定义
    elements: [
      {
        id: 'object',
        type: 'object',
        label: '物体 AB',
        // 动态位置，根据参数计算
        getPosition: (params) => ({
          x: params.lensX - params.objectDistance,
          y: 0, // 在光轴上
          height: params.objectHeight
        })
      },
      {
        id: 'convexLens',
        type: 'lens-convex',
        label: '凸透镜',
        // 动态位置
        getPosition: (params) => ({
          x: params.lensX,
          y: 0, // 在光轴上
          focalLength: params.focalLength,
          aperture: 120 // 通光孔径
        })
      },
      {
        id: 'image',
        type: 'image',
        label: '像 A\'B\'',
        // 动态位置，根据透镜公式计算
        getPosition: (params) => {
          const u = params.objectDistance;
          const f = params.focalLength;
          const v = Math.abs(u - f) < 0.5 ? (u > f ? 99999 : -99999) : (u * f) / (u - f); // 1/f = 1/u + 1/v => v = uf/(u-f)  除零保护：物在焦点时像距趋于无穷
          const magnification = -v / u; // 放大率 m = -v/u
          return {
            x: params.lensX + v,
            y: 0,
            height: params.objectHeight * Math.abs(magnification),
            real: v > 0, // v > 0 为实像，v < 0 为虚像
            upright: magnification > 0 // m > 0 为正立，m < 0 为倒立
          };
        }
      }
    ],
    // 初始光线定义（动态生成）
    generateRays: (params) => {
      const u = params.objectDistance;
      const f = params.focalLength;
      const v = Math.abs(u - f) < 0.5 ? (u > f ? 99999 : -99999) : (u * f) / (u - f);
      const lensX = params.lensX;
      const objX = lensX - u;
      const objH = params.objectHeight;
      const imgX = lensX + v;
      const mag = -v / u;
      const imgH = objH * Math.abs(mag);

      const rays = [];

      // 光线1：从物体顶点发出，平行于光轴 -> 通过焦点
      rays.push({
        id: 'ray1',
        type: 'special',
        name: '平行光轴光线',
        start: { x: objX, y: objH / 2 },
        segments: [
          { to: { x: lensX, y: objH / 2 }, type: 'incident' },
          { to: { x: lensX + 2.5 * f, y: objH / 2 - 2.5 * f * (objH / 2) / f }, type: 'refracted' } // 通过焦点
        ]
      });

      // 光线2：通过光心，方向不变
      rays.push({
        id: 'ray2',
        type: 'special',
        name: '过光心光线',
        start: { x: objX, y: objH / 2 },
        segments: [
          { to: { x: lensX, y: 0 }, type: 'incident' },
          { to: { x: imgX, y: (mag > 0 ? imgH / 2 : -imgH / 2) }, type: 'refracted' }
        ]
      });

      // 光线3：通过焦点 -> 平行于光轴
      rays.push({
        id: 'ray3',
        type: 'special',
        name: '过焦点光线',
        start: { x: objX, y: objH / 2 },
        segments: [
          { to: { x: lensX, y: 0 - (objH / 2) * (f / u) }, type: 'incident' }, // 指向焦点
          { to: { x: lensX + 2.5 * f, y: objH / 2 }, type: 'refracted' } // 平行于光轴
        ]
      });

      return rays;
    }
  },

  // 场景2：平面镜反射
  planeMirror: {
    id: 'planeMirror',
    name: '平面镜反射',
    description: '入射光线在平面镜上的反射',
    category: 'mirror',
    canvas: {
      width: 750,
      height: 600,
      scale: 1.0,
      originX: 375,
      originY: 300
    },
    adjustableParams: [
      { id: 'incidentAngle', name: '入射角', unit: '°', min: 10, max: 80, default: 45, step: 5 },
      { id: 'mirrorX', name: '镜面位置', unit: 'px', min: 200, max: 550, default: 375, step: 10 },
      { id: 'mirrorAngle', name: '镜面倾角', unit: '°', min: -30, max: 30, default: 0, step: 5 }
    ],
    elements: [
      {
        id: 'mirror',
        type: 'mirror-plane',
        label: '平面镜',
        getPosition: (params) => ({
          x: params.mirrorX,
          y: 0,
          angle: params.mirrorAngle * Math.PI / 180, // 弧度
          length: 180
        })
      },
      {
        id: 'normal',
        type: 'normal-line',
        label: '法线',
        getPosition: (params) => ({
          x: params.mirrorX,
          y: 0,
          angle: params.mirrorAngle * Math.PI / 180 + Math.PI / 2
        })
      }
    ],
    generateRays: (params) => {
      const mirrorAngle = params.mirrorAngle * Math.PI / 180;
      const incidentAngle = params.incidentAngle * Math.PI / 180;
      const mx = params.mirrorX;
      const mirrorNormal = mirrorAngle + Math.PI / 2; // 法线角度

      // 入射光线方向：从左侧射向镜面，与法线夹角为入射角
      const incidentDir = mirrorNormal - incidentAngle;
      const rayLength = 200;

      // 入射点（镜面中心）
      const hitPoint = { x: mx, y: 0 };

      // 入射光线起点
      const incidentStart = {
        x: hitPoint.x - rayLength * Math.cos(incidentDir),
        y: hitPoint.y - rayLength * Math.sin(incidentDir)
      };

      // 反射光线方向
      const reflectDir = mirrorNormal + incidentAngle;
      const reflectEnd = {
        x: hitPoint.x + rayLength * Math.cos(reflectDir),
        y: hitPoint.y + rayLength * Math.sin(reflectDir)
      };

      return [
        {
          id: 'incidentRay',
          type: 'incident',
          name: '入射光线',
          start: incidentStart,
          segments: [
            { to: hitPoint, type: 'incident' }
          ]
        },
        {
          id: 'reflectedRay',
          type: 'reflected',
          name: '反射光线',
          start: hitPoint,
          segments: [
            { to: reflectEnd, type: 'reflected' }
          ]
        }
      ];
    }
  },

  // 场景3：三棱镜折射
  prismRefraction: {
    id: 'prismRefraction',
    name: '三棱镜折射',
    description: '光线通过三棱镜的色散与偏向',
    category: 'prism',
    canvas: {
      width: 750,
      height: 600,
      scale: 1.0,
      originX: 375,
      originY: 300
    },
    adjustableParams: [
      { id: 'incidentAngle', name: '入射角', unit: '°', min: 20, max: 70, default: 40, step: 5 },
      { id: 'prismAngle', name: '棱镜顶角', unit: '°', min: 15, max: 60, default: 30, step: 5 },
      { id: 'prismIndex', name: '折射率', unit: '', min: 1.3, max: 2.0, default: 1.5, step: 0.05 },
      { id: 'prismX', name: '棱镜位置', unit: 'px', min: 250, max: 500, default: 375, step: 10 }
    ],
    elements: [
      {
        id: 'prism',
        type: 'prism',
        label: '三棱镜',
        getPosition: (params) => {
          const apexAngle = params.prismAngle * Math.PI / 180;
          const size = 100; // 棱镜半边长
          const px = params.prismX;
          const py = 0; // 光轴高度

          return {
            vertices: [
              { x: px, y: py + size * Math.sin(apexAngle / 2) }, // 顶点（向上）
              { x: px - size * Math.cos(apexAngle / 2), y: py - size * Math.sin(apexAngle / 2) }, // 左下
              { x: px + size * Math.cos(apexAngle / 2), y: py - size * Math.sin(apexAngle / 2) }  // 右下
            ],
            apexAngle: apexAngle,
            size: size
          };
        }
      }
    ],
    generateRays: (params) => {
      // 三棱镜几何
      const apexAngle = params.prismAngle * Math.PI / 180;
      const size = 100;
      const px = params.prismX;
      const py = 0;
      const n = params.prismIndex;

      const vertices = [
        { x: px, y: py + size * Math.sin(apexAngle / 2) },
        { x: px - size * Math.cos(apexAngle / 2), y: py - size * Math.sin(apexAngle / 2) },
        { x: px + size * Math.cos(apexAngle / 2), y: py - size * Math.sin(apexAngle / 2) }
      ];

      // 左侧面（入射面）和右侧面（出射面）
      const face1 = { start: vertices[0], end: vertices[1] };
      const face2 = { start: vertices[0], end: vertices[2] };

      // 左侧面外法线（指向空气/入射介质）
      const face1Angle = Math.atan2(face1.end.y - face1.start.y, face1.end.x - face1.start.x);
      const normal1 = { x: Math.cos(face1Angle - Math.PI / 2), y: Math.sin(face1Angle - Math.PI / 2) };

      // 右侧面外法线（指向空气）
      const face2Angle = Math.atan2(face2.end.y - face2.start.y, face2.end.x - face2.start.x);
      const normal2 = { x: Math.cos(face2Angle + Math.PI / 2), y: Math.sin(face2Angle + Math.PI / 2) };

      // 入射角（用户设定）
      const incidentAngleExt = params.incidentAngle * Math.PI / 180;
      const normal1Angle = Math.atan2(normal1.y, normal1.x);

      // 入射光线方向：从外部射入，与外法线夹角为入射角
      // 取方向使光线从左侧大致向右传播
      const incidentRayAngle = normal1Angle + Math.PI + incidentAngleExt;
      const incidentRayDir = { x: Math.cos(incidentRayAngle), y: Math.sin(incidentRayAngle) };

      // 入射光线起点：从入射面中点沿反方向延伸，确保与左侧面相交
      const midFace1 = {
        x: (face1.start.x + face1.end.x) / 2,
        y: (face1.start.y + face1.end.y) / 2
      };
      const rayStart = {
        x: midFace1.x - 300 * incidentRayDir.x,
        y: midFace1.y - 300 * incidentRayDir.y
      };

      // 光线与左侧面交点
      const hit1 = raySegmentIntersect(rayStart, incidentRayDir, face1.start, face1.end);
      if (!hit1) return [];

      // 第一次折射（空气->玻璃）
      const n1 = 1.0, n2 = n;
      const refracted1 = refractVector(incidentRayDir, normal1, n1, n2);
      if (!refracted1) return [];

      // 折射光线与右侧面交点
      const hit2 = raySegmentIntersect(hit1, refracted1, face2.start, face2.end);
      if (!hit2) return [];

      // 第二次折射（玻璃->空气）
      // normal2In 指向棱镜内部（入射介质）
      const normal2In = { x: -normal2.x, y: -normal2.y };
      const refracted2 = refractVector(refracted1, normal2In, n2, n1);
      if (!refracted2) return [];

      const exitEnd = {
        x: hit2.x + 300 * refracted2.x,
        y: hit2.y + 300 * refracted2.y
      };


      return [
        {
          id: 'whiteLight',
          type: 'white',
          name: '白光入射',
          start: rayStart,
          segments: [
            { to: hit1, type: 'air' }
          ]
        },
        {
          id: 'internalRay',
          type: 'internal',
          name: '棱镜内光线',
          start: hit1,
          segments: [
            { to: hit2, type: 'glass' }
          ]
        },
        {
          id: 'dispersedRays',
          type: 'dispersed',
          name: '色散光线',
          start: hit2,
          segments: [
            { to: exitEnd, type: 'air' }
          ]
        }
      ];
    }
  },

  // 场景4：凹透镜发散
  concaveLens: {
    id: 'concaveLens',
    name: '凹透镜发散',
    description: '平行光通过凹透镜的发散效果',
    category: 'lens',
    canvas: {
      width: 750,
      height: 600,
      scale: 1.0,
      originX: 375,
      originY: 300
    },
    adjustableParams: [
      { id: 'focalLength', name: '焦距 |f|', unit: 'mm', min: 50, max: 200, default: 100, step: 10 },
      { id: 'lensX', name: '透镜位置', unit: 'px', min: 200, max: 550, default: 375, step: 10 },
      { id: 'rayOffset', name: '光线偏移', unit: 'mm', min: 10, max: 80, default: 40, step: 5 }
    ],
    elements: [
      {
        id: 'concaveLens',
        type: 'lens-concave',
        label: '凹透镜',
        getPosition: (params) => ({
          x: params.lensX,
          y: 0,
          focalLength: -params.focalLength, // 负焦距
          aperture: 120
        })
      }
    ],
    generateRays: (params) => {
      const f = -params.focalLength; // 负焦距
      const lx = params.lensX;
      const h = params.rayOffset;

      // 凹透镜：平行光入射 -> 发散，反向延长线通过焦点
      // 特征光线1：平行于光轴 -> 发散，反向延长通过左侧焦点
      const ray1 = {
        id: 'parallelRay',
        type: 'special',
        name: '平行光线',
        start: { x: lx - 200, y: h },
        segments: [
          { to: { x: lx, y: h }, type: 'incident' },
          // 出射后发散，反向延长线通过焦点 (lx + f, 0)
          // 出射方向：从焦点指向入射点
          // 方向向量 = (h - 0, lx - (lx+f)) = (h, -f)
          // 单位化后
          { to: { x: lx + 200, y: h + 200 * h / Math.abs(f) }, type: 'diverged' }
        ]
      };

      // 特征光线2：指向光心 -> 方向不变
      const ray2 = {
        id: 'centerRay',
        type: 'special',
        name: '过光心光线',
        start: { x: lx - 200, y: h },
        segments: [
          { to: { x: lx, y: h }, type: 'incident' },
          { to: { x: lx + 200, y: h }, type: 'diverged' }
        ]
      };

      // 特征光线3：指向虚焦点 -> 平行出射
      // 对于凹透镜(f<0)，从左侧入射、延长线指向虚焦点(lx+f, 0) = (lx-|f|, 0)的光线，经凹透镜后平行出射
      // 入射起点(lx-200, h)，虚焦点(lx-|f|, 0)
      // 斜率 = -h / (200 - |f|)，到透镜中心x=lx时，y = h - 200*h/(200-|f|) = -h*|f|/(200-|f|)
      const absF = Math.abs(f);
      const denom = 200 - absF;
      const incidentY3 = denom > 0.1 ? -h * absF / denom : h; // 避免除零
      const ray3 = {
        id: 'focusRay',
        type: 'special',
        name: '指向焦点光线',
        start: { x: lx - 200, y: h },
        segments: [
          { to: { x: lx, y: incidentY3 }, type: 'incident' },
          { to: { x: lx + 200, y: incidentY3 }, type: 'diverged' }
        ]
      };

      return [ray1, ray2, ray3];
    }
  }
};

// 绘图题数据
const DRAWING_QUIZZES = [
  {
    id: 'dq_001',
    title: '凸透镜成像光路',
    description: '请画出物体 AB 经过凸透镜后成像的完整光路图。要求画出3条特征光线。',
    sceneId: 'convexLens',
    sceneParams: {
      focalLength: 100,
      objectDistance: 150,
      objectHeight: 60,
      lensX: 375
    },
    // 验证规则
    validation: {
      requiredRays: [
        { type: 'parallel-to-focus', name: '平行光轴->焦点' },
        { type: 'through-center', name: '过光心' },
        { type: 'through-focus', name: '过焦点->平行' }
      ],
      imageRequirements: {
        mustExist: true,
        positionTolerance: 20, // 像素容差
        heightTolerance: 10
      }
    },
    // 预期答案（用于对照）
    expectedAnswer: {
      imagePosition: 'calculated', // 由透镜公式计算
      imageType: 'real_inverted' // 实像倒立
    },
    scoring: {
      total: 100,
      rays: { each: 25, max: 75 },
      image: { correct: 25 }
    }
  },
  {
    id: 'dq_002',
    title: '平面镜反射光路',
    description: '请画出平面镜反射光路，包括入射光线、反射光线和法线，并标注入射角和反射角。',
    sceneId: 'planeMirror',
    sceneParams: {
      incidentAngle: 45,
      mirrorX: 375,
      mirrorAngle: 0
    },
    validation: {
      requiredElements: [
        { type: 'incident-ray', name: '入射光线' },
        { type: 'reflected-ray', name: '反射光线' },
        { type: 'normal', name: '法线' }
      ],
      angleTolerance: 5 // 角度容差（度）
    },
    scoring: {
      total: 100,
      incidentRay: 30,
      reflectedRay: 30,
      normal: 20,
      angleLabels: 20
    }
  },
  {
    id: 'dq_003',
    title: '凹透镜发散光路',
    description: '请画出平行光通过凹透镜后的发散光路。',
    sceneId: 'concaveLens',
    sceneParams: {
      focalLength: 100,
      lensX: 375,
      rayOffset: 40
    },
    validation: {
      requiredRays: [
        { type: 'parallel-diverge', name: '平行->发散' },
        { type: 'through-center', name: '过光心' }
      ],
      mustShowVirtualFocus: true
    },
    scoring: {
      total: 100,
      rays: { each: 30, max: 60 },
      virtualFocus: 20,
      direction: 20
    }
  }
];

// 辅助函数（用于数据内部计算）
function raySegmentIntersect(rayOrigin, rayDir, segStart, segEnd) {
  const rx = rayDir.x, ry = rayDir.y;
  const sx = segEnd.x - segStart.x, sy = segEnd.y - segStart.y;
  const dx = segStart.x - rayOrigin.x, dy = segStart.y - rayOrigin.y;

  const det = rx * sy - ry * sx;
  if (Math.abs(det) < 1e-6) return null;

  const t = (dx * sy - dy * sx) / det;
  const u = (dx * ry - dy * rx) / det;

  if (t > 1e-6 && u >= 0 && u <= 1) {
    return { x: rayOrigin.x + t * rx, y: rayOrigin.y + t * ry, t, u };
  }
  return null;
}

function refractVector(incident, normal, n1, n2) {
  const lenI = Math.sqrt(incident.x * incident.x + incident.y * incident.y);
  const lenN = Math.sqrt(normal.x * normal.x + normal.y * normal.y);
  if (lenI < 1e-6 || lenN < 1e-6) return null;

  const i = { x: incident.x / lenI, y: incident.y / lenI };
  const n = { x: normal.x / lenN, y: normal.y / lenN };

  const cosI = -(i.x * n.x + i.y * n.y);
  const sinI = Math.sqrt(Math.max(0, 1 - cosI * cosI));
  const sinT = (n1 / n2) * sinI;

  if (sinT > 1) return null; // 全反射

  const cosT = Math.sqrt(Math.max(0, 1 - sinT * sinT));
  const ratio = n1 / n2;

  return {
    x: ratio * i.x + (ratio * cosI - cosT) * n.x,
    y: ratio * i.y + (ratio * cosI - cosT) * n.y
  };
}

module.exports = {
  SCENES,
  DRAWING_QUIZZES,
  // 导出辅助函数供页面使用
  raySegmentIntersect,
  refractVector
};
