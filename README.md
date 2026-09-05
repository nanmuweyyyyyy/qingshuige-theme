# qingshuige-theme

清水阁的独立 Hugo 主题子模块。

## 设计边界

- `qingshuige-hugo`：文章、媒体、站点身份、菜单和部署配置。
- `qingshuige-theme`：Hugo 页面模板、主题 CSS，以及未来的 Vue 交互组件。
- PaperMod 在主题开发阶段继续作为主站默认主题；本主题可通过额外配置文件独立预览。

## 当前版本：v0.2.0 首页

首页已经实现：

- 仅首页显示的《兰亭集序》开屏动画；
- “后之览者，亦将有感于斯文”20px 楷体；
- “——《兰亭集序》，王羲之”18px 楷体；
- 从左到右循环的文字明暗扫描；
- 页面资源加载完成后再等待 1 秒，随后淡出；
- 每个浏览器 Tab 会话只完整播放一次（`sessionStorage`）；
- 8 秒故障兜底，避免慢资源将访问者永久困在开屏；
- `prefers-reduced-motion` 无障碍降级；
- 蓝色主导航和 Hugo 原生嵌套菜单；
- 头像型“个人主页”菜单项；
- 首页只读取 `content/blog`，按日期倒序取最新 20 篇；
- 桌面 4 列、平板 2 列、手机 1 列；
- 首页文章标题最多显示 8 个 Unicode 字符，完整标题保留在 `title`/`aria-label`；
- 摘要优先读取 description，否则从纯文本正文截取前 16 个 Unicode 字符；
- 卡片边框、底部阴影与四边 8px 内缩的完整点击区域。

## 本地预览

主站继续保留：

```yaml
theme: "PaperMod"
```

把随发布包提供的 `qingshuige-theme-preview.yaml` 放到 `qingshuige-hugo` 根目录，运行：

```powershell
hugo server -D --config "hugo.yaml,qingshuige-theme-preview.yaml"
```

这样只在本次预览时切换到 `qingshuige-theme`，不改变正式配置。

## YAML 菜单与下拉菜单

Hugo 的菜单层级由 `identifier` 与 `parent` 建立。例如：

```yaml
menus:
  main:
    - identifier: categories
      name: "文章分类"
      weight: 10

    - identifier: all_articles
      name: "全部文章"
      pageRef: "/blog"
      parent: categories
      weight: 10
```

`parent: categories` 指向父菜单的 `identifier: categories`，主题会自动将它渲染成下拉菜单。继续添加具有相同 `parent` 的条目即可扩展分类，不需要修改 HTML。

主题额外识别两个菜单参数：

```yaml
params:
  avatar: true       # 将该项显示成头像
  placeholder: true  # 暂无目标页面时保留交互位置但不跳转
```

头像路径推荐放在站点配置的主题命名空间中：

```yaml
params:
  qingshuige:
    avatar: "/favicon.png"
```

如果未配置，主题还会依次尝试 `params.avatar`、PaperMod 当前的 `params.assets.favicon`，最后使用 `/favicon.png`，从而兼容清水阁现有项目。

## Vue / Vite

Vue 3 + Vite 的开发底座仍保留在 `frontend/`，但 v0.2 首页没有为了开屏或下拉菜单加载 Vue。当前交互使用少量原生 JavaScript；等全文搜索、图片查看器等真正需要组件状态的功能出现时，再通过 Islands 模式启用 Vue。

## Logo 与头像

主题 Header 预留了 36×36 的 Logo 槽位。默认状态下该槽位透明，因此不会显示虚线框或临时图标；配置 Logo 后会自动填入且不会引起导航布局位移。

```yaml
params:
  qingshuige:
    logo: "/images/logo.svg"
    avatar: "/images/avatar.webp"
```

建议把站点专属资源放在主站仓库的 `static/images/` 中，而不是主题仓库中。这样主题与站点身份资源保持解耦。

若未配置 `params.qingshuige.avatar`，主题会自动使用：

```text
/qingshuige/defaults/avatar.svg
```

它位于主题的 `static/qingshuige/defaults/avatar.svg`，因此即使主站没有头像配置，导航右侧也始终有稳定的默认头像。
