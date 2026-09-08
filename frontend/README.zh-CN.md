# qingshuige-theme 前端开发

搜索界面由 Vue 负责，搜索算法来自项目根目录的 `packages/qingshuige-search`。

## 一次构建后运行 Hugo

```bash
cd themes/qingshuige-theme
npm install
npm run build
cd ../..
hugo server -D --config "hugo.yaml,qingshuige-theme-preview.yaml"
```

默认 `params.qingshuige.viteDevServer: false`，Hugo 会加载 `static/qingshuige-vue/` 中已经构建好的资源。

## 使用 Vite 热更新

先将预览配置中的：

```yaml
params:
  qingshuige:
    viteDevServer: true
```

然后分别运行：

```bash
cd themes/qingshuige-theme
npm run dev
```

```bash
hugo server -D --config "hugo.yaml,qingshuige-theme-preview.yaml"
```

Vite 开发服务器默认使用 `http://127.0.0.1:5173`。
