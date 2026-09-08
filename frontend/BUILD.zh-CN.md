# 前端构建说明

在 `themes/qingshuige-theme` 目录执行：

```bash
npm install
npm run build
```

Vite 配置会将构建结果写入：

```text
static/qingshuige-vue/
├─ qingshuige-vue.js
└─ qingshuige-vue.css
```

如果目录中没有这两个文件，请先确认项目根目录下的 `themes/qingshuige-theme/vite.config.js` 已存在，然后重新执行构建。
