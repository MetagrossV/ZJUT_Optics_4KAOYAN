# 修复计划

## 问题分析

### 1. 光路模拟 - 光线延伸
- 光线目前延伸到 `lensX + 2.5 * f`，但应延伸到像平面（x = lensX + v）或画布边缘
- 用户说"光线没有延伸到象方焦平面上"：光线应通过焦点 F' 并延伸到像平面

### 2. 光路模拟 - 基准轴
- `drawOpticalAxis` 光轴绘制需要更醒目，增加刻度标记
- 改进网格绘制，使基准线更明显

### 3. 绘图题 - 放置问题（核心问题）
- 小程序 Canvas 2D 中 `touch.x` 是 Canvas 本地 CSS 像素坐标
- 但 `pageToCanvas` 错误地减去了 `canvasOffsetX`
- 更关键的是：`touch.x` 需要缩放到 Canvas 逻辑坐标（`canvasWidth / canvasCSSWidth`）
- 导致器件放置位置错误，用户看不到放置的器件

### 4. 绘图题 - 网格吸附
- 需要实现网格吸附功能
- 网格大小 50px，吸附阈值 20px
- 放置和拖动时自动吸附到网格
- 显示网格点和吸附提示

## 修复方案

### 阶段1：修复坐标转换（drawing-quiz.js + optical-sim.js）
- 修改 `getCanvasOffset` 获取 CSS 大小
- 修改 `pageToCanvas` 将 CSS 像素转换为 Canvas 逻辑坐标
- 这样放置和拖动才能正确工作

### 阶段2：修复光线延伸（data_optical_scenes.js）
- 修改凸透镜场景的 `generateRays`
- 光线延伸到像平面 x = lensX + v，或画布边缘
- 修正光线3的入射段计算错误

### 阶段3：改进基准轴（optical-sim.js）
- 光轴增加刻度标记
- 改进网格绘制

### 阶段4：添加网格吸附（drawing-quiz.js）
- 添加 `snapToGrid` 函数
- 在 `placeElement` 和拖动中使用
- 改进 `drawGrid` 显示吸附点

### 阶段5：测试
- 创建测试脚本验证语法
- 验证坐标转换逻辑
- 验证网格吸附逻辑
- 验证光线延伸逻辑
- 提交前确保所有测试通过

## 测试用例

### 测试1：坐标转换
- 输入：touch.x = 187.5（CSS 像素，iPhone 6 屏幕宽度 375px，Canvas CSS 宽度 375px）
- 预期：canvasLogicX = 187.5 * (750 / 375) = 375

### 测试2：网格吸附
- 输入：x = 42, gridSize = 50, threshold = 20
- 预期：snapToGrid(42) = 50（因为 42 距离 50 只有 8px，在阈值内）

### 测试3：光线延伸
- 输入：u = 150, f = 100, lensX = 375
- 预期：v = 300, 光线1 延伸到 x = 375 + 300 = 675

### 测试4：光线3 入射段
- 输入：u = 150, f = 100, objH = 60
- 预期：incY3 = 30 * (-100/50) = -60
- 验证：原来的代码 `0 - (30) * (100/150) = -20` 是错误的
