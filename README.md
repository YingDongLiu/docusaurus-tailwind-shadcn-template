# Docusaurus + TailwindCSS + Shadcn/UI 模板

基于 Docusaurus V3 的现代化文档网站模板，集成了 TailwindCSS 和 Shadcn/UI 组件库。

## 技术栈

- ⚡️ Docusaurus V3
- 🎨 TailwindCSS v4
- 🧩 Shadcn/UI 组件库
- 🔍 本地搜索功能
- 📝 OpenAPI 文档生成
- 📱 响应式设计
- 🌗 深色/浅色主题

## 快速开始

### 安装

```bash
# 克隆仓库
git clone https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template.git
cd docusaurus-tailwind-shadcn-template

# 安装依赖
yarn install

# 启动开发服务器
yarn start
```

### 构建

```bash
# 构建生产版本
yarn build

# 本地预览生产版本
yarn serve
```


## Project Structure

```bash
docusaurus-tailwind-shadcn-template/
├── api-swagger/         # API Swagger files - generate API Docs (if using @PaloAltoNetworks/docusaurus-openapi-docs)
├── blog/
├── docs/
├── src/
│   ├── components/
│   │   └── ui/           # Shadcn/UI components
│   ├── css/
│   │   └── custom.css    # TailwindCSS config and custom styles
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── pages/            # React pages
│   ├── plugins/          # Docusaurus plugins
│   └── theme/            # Docusaurus theme customization
├── static/               # Static assets
├── tailwind.config.js    # TailwindCSS configuration (if using v3, removed in v4)
├── postcss.config.js     # PostCSS configuration
└── docusaurus.config.js  # Docusaurus configuration
```

## 配置

### TailwindCSS 配置

TailwindCSS v4 的配置在 `src/css/custom.css` 文件中进行自定义。

### Shadcn/UI 组件

所有 Shadcn/UI 组件位于 `src/components/ui/` 目录。使用示例：

```tsx
import { Button } from '@/components/ui/button';

function MyComponent() {
  return (
    <Button variant="outline">
      点击我
    </Button>
  );
}
```


### OpenAPI 文档生成

项目集成了 `docusaurus-plugin-openapi-docs` 插件，可以从 OpenAPI 规范生成 API 文档。

```bash
# 生成 API 文档
yarn gen-api-docs <id>

# 清理 API 文档  
yarn clean-api-docs <id>
```



## 相关文档

- [Docusaurus](https://docusaurus.io/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [OpenAPI Docs Plugin](https://docusaurus-openapi.tryingpan.dev/)

## 许可证

MIT License
