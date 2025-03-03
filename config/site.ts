// config/site.ts

export const siteConfig = {
  // 网站基本信息
  author: "墨离",
  username: "molikaiwork",
  title: "个人主页",
  description: "基于 v0.dev 提供的灵感创作的，使用 Next.js 框架，美观、简洁的静态个人主页。",
  keywords: ["molikai", "molikaiwork", "墨离", "墨离开", "主页"],
  baseUrl: "https://homelabe.pages.dev",
  robots: [
    {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/images/"],
    },
    {
      userAgent: "Baiduspider",
      disallow: ["/"],
    },
  ],
  startYear: 2025,

  // 备案信息
  icp: {
    enable: false,
    name: "萌ICP备20250089号",
    url: "https://icp.gov.moe/?keyword=20250089",
  },

  // 导航菜单
  navItems: [
    { name: "关于我", path: "/" },
    { name: "游戏", path: "/games" },
    { name: "友链", path: "/friends" },
    { name: "时间线", path: "/timeline" },
    { name: "我的项目", path: "/projects" },
    { name: "开源地址", path: "https://github.com/molikai-work/HomeLab", target: "_blank", rel: "external nofollow noreferrer noopener" },
  ],

  // 个人信息
  profile: {
    avatar: "/images/avatar.png",
    location: "陕西汉中",
    occupation: "学生",
    introduction: "不会写简介，也不会写介绍之类的（233",
    attributes: [
      { name: "Furry", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "Wolf", color: "bg-green-500/10 text-green-400 border-green-500/20" },
      { name: "???", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    ],
    hobbies: ["Cloudflare", "Telegram", "Spotify"],
  },

  // 社交媒体链接
  socialLinks: {
    enable: true,
    links: [
      { name: "GitHub", href: "https://github.com/molikai-work", icon: "Github" },
      { name: "Twitter", href: "https://twitter.com/molikai", icon: "Twitter" },
      { name: "Blog", href: "https://furrycon.top/", target: "_blank", rel: "follow" },
      { name: "Email", href: "mailto:info@example.com", icon: "Mail", target: "_self" },
    ],
  },

  // 首页随机标语
  homeQuotes: [
    "方生方死，方死方生",
    "我的世界，感谢有你",
    "随心为生，随身为逝",
    "Hello, World!",
    "恰沐春风共同游，终只叹，木已舟",
    "我想要说的，前人们都说过了",
    "世界之大为何我们相遇，难道是缘分，难道是天意",
    "有些人光是遇到就已经赚到了",
    "人生若只如初见，何事秋风悲画扇",
  ],

  // 技能栈
  // 图标来自 https://devicon.dev/
  skills: {
    "编程语言": [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    ],
    "框架": [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    ],
    "数据库": [
      { name: "D1、KV" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    ],
    "工具": [
      { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
    ],
  },

  // 游戏列表
  games: [
    {
      name: "Minecraft",
      description: "自由建造、生存、探索的沙盒游戏。",
      genre: ["沙盒", "开放世界"],
      url: "https://www.minecraft.net/",
    },
    {
      name: "Half-Life 2",
      description: "非常经典的单人 FPS 游戏。",
      genre: ["FPS", "科幻"],
      url: "https://store.steampowered.com/app/220/HalfLife_2/",
    },
    {
      name: "Portal 2",
      description: "非常喜欢的一款解谜游戏，带点 FPS。",
      genre: ["解谜", "剧情"],
      url: "https://store.steampowered.com/app/620/Portal_2/",
    },
    {
      name: "The Escapists 2",
      description: "像素风越狱游戏。",
      genre: ["策略", "像素"],
      url: "https://store.steampowered.com/app/641990/The_Escapists_2/",
    },
    {
      name: "Thief Simulator",
      description: "紧张的潜行，模拟做个小偷。",
      genre: ["模拟", "潜行"],
      url: "https://store.steampowered.com/app/704850/Thief_Simulator/",
    },
    {
      name: "Monster Hunter: World",
      description: "Mod 才是精髓！嘿嘿嘿~",
      genre: ["开放世界", "龙！！！"],
      url: "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    },
  ],

  // 友链列表
  friends: [
    {
      name: "一只林风owo",
      avatar: "https://img.linfun.top/imgapp/CxDragon-big-heade.png",
      description: "立志于成为一只最最最最酷的兽兽！",
      url: "https://linfun.top/",
    },
  ],

  // 时间线事件
  timelineEvents: [
    { date: "now", title: "现在进行时", description: "在这里，等待添加..." },
    {
      date: "≈2023-12-07",
      title: "第二次购买云服务器",
      description: "我突然发现星辰云似乎是雨云的代理商…？所以最终跑到了雨云去买个云服务器看看。",
    },
    {
      date: "≈2023-11-21",
      title: "第一次购买云服务器",
      description: "在使用了虚拟主机将近 1 年后，终于把目光盯上了云服务器，我似乎也想要部署一些软件？",
    },
    {
      date: "≈2023-10-15",
      title: "第一次注册域名",
      description: "不再满足于免费的二级子域名？我跑到了阿里云注册了一个我自己的域名。挑了一个便宜的 .top 域名。",
    },
    {
      date: "≈2022-12-10",
      title: "注册星辰云",
      description: "这是我第一个正式使用的云服务提供商，也是我搭建网站的开始，最初使用虚拟主机。",
    },
    {
      date: "≈2022-11-12",
      title: "注册雨云",
      description: "虽然在这里已经注册了，但我实际上并未使用，或许当时只是听说雨云签到领积分的活动…？",
    },
    {
      date: "≈202?-??-??",
      title: "搭建 Minecraft 服务器",
      description:
        "甚至已经忘了是什么时候的事了，似乎是我最初购买了一个面板服，后来想给服务器弄一个官网才有了后面的事。",
    },
  ],

  // 项目状态映射
  projectStatusMapping: {
    planning: { label: "规划中", className: "bg-purple-500 hover:bg-purple-500 text-white" },
    in_progress: { label: "开发中", className: "bg-yellow-500 hover:bg-yellow-500 text-black" },
    beta: { label: "测试中", className: "bg-blue-400 hover:bg-blue-400 text-white" },
    completed: { label: "已完成", className: "bg-green-500 hover:bg-green-500 text-white" },
    maintenance: { label: "维护中", className: "bg-blue-500 hover:bg-blue-500 text-white" },
    paused: { label: "已暂停", className: "bg-gray-400 hover:bg-gray-400 text-white" },
    archived: { label: "已归档", className: "bg-gray-700 hover:bg-gray-700 ext-white" },
  },

  // 项目列表
  projects: [
    {
      name: "个人主页",
      description: "基于 v0.dev 提供的灵感创作的，使用 Next.js 框架，美观、简洁的静态个人主页。",
      tags: ["Next.js", "TypeScript"],
      status: "in_progress",
      github: "https://github.com/molikai-work/HomeLab",
      demo: "https://homelabe.pages.dev/",
    },
    {
      name: "待办事项清单",
      description: "一个简单的基于 KV 存储的待办事项清单，使用 React 组件库，部署于 Cloudflare Workers。",
      tags: ["React", "TypeScript"],
      status: "planning",
    },
    {
      name: "快速翻译机器人",
      description:
        "一个 Telegram Bot 翻译机器人，快捷的中文和英文之间的自动翻译，可以在私聊中和群组中使用。支持使用 Cloudflare Workers 部署和 PHP 部署。",
      tags: ["Cloudflare", "Telegram", "JavaScript"],
      status: "completed",
      github: "https://github.com/molikai-work/QuickTranslateBot",
      demo: "https://t.me/QuicklyTranslationBot",
    },
    {
      name: "百度搜索图片 API",
      description: "使用 Cloudflare Workers 部署的百度搜索图片 API。因为是直接解析 HTML 页面得来的数据，不保证稳定性。",
      tags: ["Cloudflare", "Baidu", "JavaScript"],
      status: "completed",
      github: "https://github.com/molikai-work/baidu-image-search-api",
    },
    {
      name: "运行状态仪表板",
      description: "基于 UptimeRobot API 的美观的网站运行状态仪表板，还支持 API 代理，基于 yb/uptime-status 修改。",
      tags: ["Cloudflare", "React", "JavaScript"],
      status: "completed",
      github: "https://github.com/molikai-work/uptime-status",
    },
    {
      name: "一言 API",
      description:
        "使用 Cloudflare Pages 搭建的一言（Hitokoto）API，简洁、快速还好用。数据集基于 hitokoto-osc/sentences-bundle。",
      tags: ["Cloudflare", "Hitokoto", "JavaScript"],
      status: "completed",
      github: "https://github.com/molikai-work/hitokoto-cloudflare",
      demo: "https://hitokoto-api.pages.dev/",
    },
    {
      name: "必应每日壁纸",
      description: "使用 Cloudflare Workers 定时脚本实现将 Bing Wallpaper 自动发送到 Telegram 会话中。",
      tags: ["Cloudflare", "Telegram", "JavaScript"],
      status: "completed",
      github: "https://github.com/molikai-work/TelegramBingWallpaper",
      demo: "https://t.me/BingWallpaperChannel",
    },
    {
      name: "访客数据统计",
      description:
        "一个基于 Cloudflare Workers 的网站访问数统计程序，使用 D1 数据库存储和 Huno 构建。已经修改了某些部分，感谢原作者。",
      tags: ["Cloudflare", "TypeScript"],
      status: "completed",
      github: "https://github.com/molikai-work/Analytics_with",
    },
    {
      name: "重复文件扫描器",
      description:
        "一个非常简陋的用于扫描所在目录及其子目录中的重复文件和文件夹的 Python 脚本。支持基于文件名、文件夹名或文件内容检查重复项。可以设置排除特定的文件扩展名、设置最大递归深度、以及记录扫描日志。",
      tags: ["Python"],
      status: "completed",
      github: "https://github.com/molikai-work/FileDuplicateChecker",
    },
    {
      name: "Minecraft 皮膚 API",
      description: "一個基於 PHP 的 Minecraft 皮膚調用 API。",
      tags: ["Minecraft", "PHP"],
      status: "archived",
      github: "https://github.com/molikai-work/MinecraftSkinApi",
    },
    {
      name: "D1 Workers 範本",
      description: "通過 Workers 部署的，綁定 D1 數據庫並查詢數據的一個範本，通過 API 調用。",
      tags: ["Cloudflare", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/d1-workers",
    },
    {
      name: "Whois API",
      description: "通過 Workers 部署的，WHOIS 域名資訊獲取，使用 whoisxmlapi.com API，通過 API 調用。",
      tags: ["Cloudflare", "WHOIS API", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/whoisXmlApi.com",
    },
    {
      name: "Bilibili Avbv 轉換 API",
      description: "通過 Workers 部署的，哔哩哔哩av、bv號的互相轉換器，通過 API 調用。",
      tags: ["Cloudflare", "Bilibili", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/BilibiliAvbvConverterApi",
    },
    {
      name: "Bilibili 影片資訊 API",
      description: "通過 Workers 部署的，哔哩哔哩影片資訊獲取，通過 API 調用。",
      tags: ["Cloudflare", "Bilibili", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/bilibiliInfoApi",
    },
    {
      name: "Baidu 圖像 API",
      description: "通過 Workers 部署的，百度圖像 URL 獲取，通過 API 調用。",
      tags: ["Cloudflare", "Baidu", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/baiduImageApi",
    },
    {
      name: "IP 地址資訊 API",
      description: "通過 Workers 部署的，IP 地址信息獲取，通過 API 調用。",
      tags: ["Cloudflare", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/ipInfoApi",
    },
    {
      name: "Typecho 評論限制插件",
      description: "Typecho 限制評論字數和內容插件。",
      tags: ["Typecho", "PHP"],
      status: "archived",
      github: "https://github.com/molikai-work/commentRestrict",
    },
    {
      name: "OCR 干扰图像生成",
      description: "一个简单的HTML页面，基于JS实现了通过文本生成抗OCR识别的图像。",
      tags: ["HTML", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/OCR-Interference",
    },
    {
      name: "像素头像生成器",
      description: "通过字符串来生成简单的几何像素头像。",
      tags: ["HTML", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/geometricAvatarGeneration",
    },
    {
      name: "Telegraph 图床上传",
      description: "通過 Workers 部署的，基於 Telegra.ph 的圖床。",
      tags: ["Cloudflare", "JavaScript"],
      status: "archived",
      github: "https://github.com/molikai-work/telegraphWorkers",
    },
  ],
}

// 自动更新版权年份函数
export function getCopyrightYears(startYear: number): string {
  const currentYear = new Date().getFullYear()
  return currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`
}
