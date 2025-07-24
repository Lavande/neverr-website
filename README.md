# Neverr 官方网站

**Slogan**: Not just quitting. Becoming better.

## 🎯 项目简介

这是 Neverr 应用的官方展示网站，基于 Next.js + Tailwind CSS + shadcn/ui 构建。网站完美复现了 Neverr Flutter 应用的设计风格和核心理念，为用户提供应用功能介绍、使用方法说明和下载引导。

## ✨ 主要特性

- **🎨 一致的设计语言**: 完美复现 Neverr 应用的温和疗愈设计风格
- **📱 响应式设计**: 在桌面端、平板和移动端都有优异的用户体验
- **🚀 现代化技术栈**: 使用 Next.js 14、Tailwind CSS 和 shadcn/ui
- **🎯 聚焦核心理念**: 清晰展示"自我语音明示"的心理学原理
- **📊 功能展示**: 全面介绍应用的六大核心功能
- **🔄 交互体验**: 流畅的动画和过渡效果

## 🛠 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **组件库**: shadcn/ui
- **图标**: Lucide React
- **语言**: TypeScript
- **部署**: Vercel (推荐)

## 🚀 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
website/
├── src/
│   ├── app/
│   │   ├── globals.css        # 全局样式和 Neverr 主题
│   │   ├── layout.tsx         # 根布局组件
│   │   └── page.tsx           # 主页面
│   ├── components/
│   │   └── ui/                # shadcn/ui 组件
│   └── lib/
│       └── utils.ts           # 工具函数
├── public/                    # 静态资源
├── components.json            # shadcn/ui 配置
└── package.json
```

## 🎨 设计系统

网站使用了与 Neverr Flutter 应用一致的设计系统：

### 色彩方案

- **主色调**: #567B95 (静谧蓝)
- **辅助色**: #6BA68B (宁静绿)
- **背景色**: #F7F5EF (浅米色)
- **表面色**: #FFFFFF (白色)
- **文字色**: #2D3748 (深灰) / #718096 (次要文字)

### 设计原则

- **温和疗愈**: 使用柔和的色彩和圆润的边角
- **简洁明确**: 信息层次清晰，避免视觉干扰
- **一致性**: 与移动应用保持统一的视觉语言

## 📦 主要页面和组件

### 主页面结构

1. **导航栏**: 响应式导航，包含移动端侧边栏菜单
2. **Hero 区域**: 展示 Neverr 品牌和核心理念
3. **理念说明**: 解释"从来不"vs"戒除"的心理学差异
4. **功能介绍**: 六大核心功能的详细说明
5. **使用方法**: 四步使用流程的可视化展示
6. **界面预览**: 应用截图的模拟展示
7. **下载引导**: iOS 和 Android 下载按钮
8. **页脚**: 产品信息和支持链接

### 自定义组件

- **neverr-gradient**: Neverr 品牌渐变背景
- **neverr-text-gradient**: 文字渐变效果
- **neverr-card**: 统一的卡片样式
- **neverr-button-primary**: 主要按钮样式

## 🔧 自定义配置

### Tailwind 扩展

在 `src/app/globals.css` 中定义了 Neverr 的自定义样式和 CSS 变量，包括：

- 完整的 Neverr 色彩系统
- 明暗主题支持
- 自定义组件样式
- 响应式断点优化

### 功能模块

- **features**: 核心功能介绍数据
- **steps**: 使用步骤数据  
- **screenshots**: 应用界面预览数据

## 📱 响应式设计

网站针对不同设备进行了优化：

- **移动端** (< 768px): 单列布局，侧边栏导航
- **平板端** (768px - 1024px): 两列布局，适中间距
- **桌面端** (> 1024px): 三列布局，宽松间距

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中连接 GitHub 仓库
3. 选择 `website` 目录作为根目录
4. 自动部署

### 其他平台

- **Netlify**: 支持 Next.js 静态导出
- **AWS Amplify**: 支持 SSR 和 SSG
- **自托管**: 使用 Docker 或 PM2

## 🤝 贡献指南

欢迎贡献代码和改进建议！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📄 开源协议

本项目使用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 项目链接: [GitHub Repository]
- 问题反馈: [GitHub Issues]
- Neverr 应用: [App Store] | [Google Play]

---

**Neverr Website** - 展示改变的力量 ✨
