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
- 🌐 国际化支持（中文/日文/英文）

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

### 国际化开发

项目支持中文、日文和英文三种语言。

**本地开发不同语言版本：**

```bash
# 启动默认语言（英文）
yarn start

# 启动中文版本
yarn start --locale zh

# 启动日文版本  
yarn start --locale ja
```

**访问不同语言版本：**
- 英文：http://localhost:3000/
- 中文：http://localhost:3000/zh/
- 日文：http://localhost:3000/ja/

**构建多语言版本：**

```bash
# 构建所有语言版本
yarn build

# 构建特定语言版本
yarn build --locale zh
yarn build --locale ja
```

**翻译文件位置：**
- 中文：`i18n/zh/`
- 日文：`i18n/ja/`


## 项目结构

```bash
docusaurus-tailwind-shadcn-template/
├── api-swagger/         # API Swagger 文件 - 生成 API 文档
├── blog/                # 博客文章
├── docs/                # 文档内容
├── i18n/                # 国际化翻译文件
│   ├── zh/              # 中文翻译
│   └── ja/              # 日文翻译
├── src/
│   ├── components/
│   │   └── ui/          # Shadcn/UI 组件
│   ├── css/
│   │   └── custom.css   # TailwindCSS 配置和自定义样式
│   ├── lib/
│   │   └── utils.ts     # 工具函数
│   ├── pages/           # React 页面
│   ├── plugins/         # Docusaurus 插件
│   └── theme/           # Docusaurus 主题自定义
├── static/              # 静态资源
├── postcss.config.js    # PostCSS 配置
└── docusaurus.config.js # Docusaurus 配置
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


### 国际化配置

项目使用 Docusaurus 内置的 i18n 功能，支持三种语言：

- **英文 (en)**: 默认语言
- **中文 (zh)**: 简体中文
- **日文 (ja)**: 日本語

**添加新的翻译内容：**

1. 在组件中使用 `Translate` 组件：
```jsx
import Translate from '@docusaurus/Translate';

<Translate id="myTranslationId">Default text</Translate>
```

2. 在翻译文件中添加对应翻译：
```json
// i18n/zh/code.json 或 i18n/ja/code.json
{
  "myTranslationId": {
    "message": "翻译后的文本",
    "description": "翻译描述"
  }
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
