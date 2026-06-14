# 图片目录说明

本目录存放小程序的静态图片资源。

## TabBar 图标（需要自行准备）

需要以下 8 个图标文件（建议使用 64x64 像素的 PNG 透明背景）：

| 文件名 | 用途 | 状态栏颜色 |
|--------|------|-----------|
| tab-formula.png | 公式手册标签未选中 | 灰色 |
| tab-formula-active.png | 公式手册标签选中 | 主题色（#4a69bd）|
| tab-quiz.png | 刷题标签未选中 | 灰色 |
| tab-quiz-active.png | 刷题标签选中 | 主题色 |
| tab-mistake.png | 错题本标签未选中 | 灰色 |
| tab-mistake-active.png | 错题本标签选中 | 主题色 |
| tab-profile.png | 我的标签未选中 | 灰色 |
| tab-profile-active.png | 我的标签选中 | 主题色 |

## 图标设计建议

可以使用以下图标设计工具：
- 阿里巴巴图标库：https://www.iconfont.cn
- 选择风格：线性图标（未选中）+ 填充图标（选中）
- 主题色：#4a69bd（靛蓝）
- 未选中色：#999999（灰色）

## 临时方案

如果暂时没有图标，可以在 `app.json` 中删除 tabBar 的 iconPath 和 selectedIconPath 配置，只保留文字标签。

删除方式：将 app.json 中的 tabBar 配置改为：
```json
"tabBar": {
  "color": "#999999",
  "selectedColor": "#4a69bd",
  "backgroundColor": "#ffffff",
  "borderStyle": "black",
  "list": [
    { "pagePath": "pages/index/index", "text": "公式手册" },
    { "pagePath": "pages/quiz/quiz", "text": "刷题" },
    { "pagePath": "pages/mistakes/mistakes", "text": "错题本" },
    { "pagePath": "pages/profile/profile", "text": "我的" }
  ]
}
```
