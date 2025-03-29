# HomeLab - 个人主页
![HomeLab](https://img.shields.io/badge/HomeLab-个人主页-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

HomeLab 是一个基于 Next.js 和 TypeScript 构建的美观、简洁的个人主页模板。它提供了丰富的自定义选项，让你可以轻松展示个人信息、技能、项目、游戏喜好、友链和时间线等内容。

## 📋 功能特点
- 🎨 现代化设计，响应式布局
- 🌙 暗色主题
- 📱 移动端友好
- 👤 可自定义的个人资料展示
- 🛠️ 技能栈展示
- 🎮 游戏收藏展示
- 🔗 友情链接管理
- ⏱️ 个人时间线
- 📂 项目展示（含状态标记）
- 🔄 随机首页标语
- 🔗 社交媒体链接

## 👀 演示
![](/screenshots/1741325614246.png)

### [HomeLab - Vercel](https://myhomelab.vercel.app/)

### [HomeLab - Cloudflare Pages](https://homelabe.pages.dev/)

## 🚀 快速开始
### 前置要求
- Node.js >= v18.0.0
- npm

### 本地开发
1. 克隆仓库

```bash
git clone https://github.com/molikai-work/HomeLab.git
cd HomeLab
```

2. 安装依赖

```shellscript
npm install
```

3. 启动开发服务器

```shellscript
npm run dev
```

4. 在浏览器中访问 `http://localhost:3000` 查看网站

### 构建静态网站
1. 构建项目

```shellscript
npm run build
```

2. 将 `out` 目录中的文件部署到你的静态网站托管服务上。

### 使用 Vercel 部署
1. 在 [Vercel](https://vercel.com/) 上创建账户
2. 点击下方按钮直接部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/molikai-work/HomeLab)

### 使用 Cloudflare Pages 部署
1. 在 [Cloudflare](https://cloudflare.com/) 上创建账户
2. 创建新项目并连接到你的 GitHub 仓库
3. 配置构建设置框架预设为 `Next.js`
4. 点击部署
5. 设置兼容性标志为 `nodejs_compat`
6. 重试部署

## ⚙️ 配置指南
所有配置都集中在 `config/site.ts` 文件中。你可以根据需要修改以下内容：

### 基本信息
```typescript
// 网站基本信息
author: "你的名字",
username: "你的用户名",
title: "个人主页",
description: "你的网站描述",
keywords: ["关键词1", "关键词2"],
baseUrl: "https://yourdomain.com",
robots: [
  {
    userAgent: "*",
    allow: ["/"],
    disallow: ["/images/"],
  },
],
startYear: 2025, // 版权起始年份
```

### 备案信息
```typescript
// 备案信息
icp: {
  enable: false, // 设置为 true 启用备案信息
  name: "备案名称及编号",
  url: "备案链接",
},
```

### 导航菜单
```typescript
// 导航菜单
navItems: [
  { name: "关于我", path: "/" },
  { name: "游戏", path: "/games" },
  { name: "友链", path: "/friends" },
  { name: "时间线", path: "/timeline" },
  { name: "我的项目", path: "/projects" },
  // 外部链接示例
  { 
    name: "GitHub", 
    path: "https://github.com/yourusername", 
    target: "_blank", 
    rel: "external nofollow noreferrer noopener" 
  },
],
```

### 个人信息
```typescript
// 个人信息
profile: {
  avatar: "/images/avatar.png", // 头像路径
  location: "你的位置",
  occupation: "你的职业",
  introduction: "个人简介",
  attributes: [
    { 
      name: "属性1", 
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20" 
    },
    // 更多属性...
  ],
  hobbies: ["爱好1", "爱好2", "爱好3"],
},
```

### 社交媒体链接
```typescript
// 社交媒体链接
socialLinks: {
  enable: true,
  links: [
    { 
      name: "GitHub", 
      href: "https://github.com/yourusername", 
      icon: "Github" // 使用 Lucide 图标名称
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/yourusername", 
      icon: "Twitter" 
    },
    // 更多链接...
  ],
},
```

> 注意：图标名称来自 [Lucide Icons](https://lucide.dev/icons/)，首字母需要大写。

### 首页随机标语
```typescript
// 首页随机标语
homeQuotes: [
  "标语1",
  "标语2",
  "标语3",
  // 更多标语...
],
```

### 技能栈
```typescript
// 技能栈
skills: {
  "分类1": [
    { 
      name: "技能名称", 
      icon: "图标URL" // 可选
    },
    // 更多技能...
  ],
  "分类2": [
    // 技能列表...
  ],
},
```

> 技能图标推荐使用 [devicon](https://devicon.dev/) 提供的图标。

### 游戏列表
```typescript
// 游戏列表
games: [
  {
    name: "游戏名称",
    description: "游戏描述",
    genre: ["类型1", "类型2"],
    url: "https://game-url.com", // 可选
  },
  // 更多游戏...
],
```

### 友链列表
```typescript
// 友链列表
friends: [
  {
    name: "朋友名称",
    avatar: "头像URL",
    description: "简短描述",
    url: "https://friend-site.com",
  },
  // 更多友链...
],
```

### 时间线事件
```typescript
// 时间线事件
timelineEvents: [
  { 
    date: "now", // 特殊值 "now" 表示当前日期
    title: "事件标题", 
    description: "事件描述" 
  },
  { 
    date: "2023-12-07", 
    title: "事件标题", 
    description: "事件描述" 
  },
  // 更多事件...
],
```

### 项目状态映射
```typescript
// 项目状态映射
projectStatusMapping: {
  planning: { 
    label: "规划中", 
    className: "bg-purple-500 hover:bg-purple-500 text-white" 
  },
  // 更多状态...
},
```

### 项目列表
```typescript
// 项目列表
projects: [
  {
    name: "项目名称",
    description: "项目描述",
    tags: ["标签1", "标签2"],
    status: "in_progress", // 对应 projectStatusMapping 中的键
    github: "https://github.com/yourusername/project", // 可选
    demo: "https://demo-url.com", // 可选
  },
  // 更多项目...
],
```

## 🎨 自定义主题
你可以通过修改 `app/globals.css` 文件中的 CSS 变量来自定义主题颜色：

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    /* 更多变量... */
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    /* 更多变量... */
  }
}
```

## 📁 项目结构
```plaintext
HomeLab/
├── app/                  # Next.js 应用目录
│   ├── ClientLayout.tsx  # 客户端布局组件
│   ├── friends/          # 友链页面
│   ├── games/            # 游戏页面
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   ├── projects/         # 项目页面
│   ├── robots.ts         # 机器人规则
│   ├── sitemap.ts        # 站点地图
│   └── timeline/         # 时间线页面
├── components/           # 组件目录
│   ├── current-time.tsx  # 当前时间组件
│   ├── friend-card.tsx   # 友链卡片组件
│   ├── game-card.tsx     # 游戏卡片组件
│   ├── page-layout.tsx   # 页面布局组件
│   ├── profile-section.tsx # 个人资料组件
│   ├── project-card.tsx  # 项目卡片组件
│   ├── skill-item.tsx    # 技能项组件
│   ├── tech-stack-section.tsx # 技术栈组件
│   └── theme-provider.tsx # 主题提供者组件
├── config/               # 配置目录
│   └── site.ts           # 网站配置
├── public/               # 静态资源目录
│   └── images/           # 图片目录
└── README.md             # 项目说明文档
```

## 📝 添加新页面
要添加新页面，请在 `app` 目录下创建新文件夹和 `page.tsx` 文件：

```typescript
// app/newpage/page.tsx
import { PageLayout } from "@/components/page-layout"

export default function NewPage() {
  return (
    <PageLayout title="新页面标题">
      {/* 页面内容 */}
    </PageLayout>
  )
}
```

然后在 `config/site.ts` 的 `navItems` 中添加导航链接：

```typescript
navItems: [
  // 现有导航项...
  { name: "新页面", path: "/newpage" },
],
```

## 🖼️ 添加图片
1. 将图片放在 `public/images/` 目录下
2. 在代码中引用图片：

```typescript
<Image
  src="/images/your-image.jpg"
  alt="图片描述"
  width={200}
  height={200}
/>
```

## 🤝 贡献
欢迎贡献代码、报告问题或提出改进建议！请遵循以下步骤：

1. Fork 仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 📄 许可证
本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。

## 🙏 致谢
- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件
- [Lucide Icons](https://lucide.dev/) - 图标库
- [v0.dev](https://v0.dev/) - 设计灵感

---

Made with ❤️ by molikai-work
