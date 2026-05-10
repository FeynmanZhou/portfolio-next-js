# **Magic Portfolio by Once UI**

[English](./README.md) | 中文

查看 [在线演示](https://demo.magic-portfolio.com)。

![Magic Portfolio](https://demo.magic-portfolio.com/images/og/home.jpg)


# **快速开始**

Magic Portfolio 基于 [Once UI](https://once-ui.com) 和 [Next.js](https://nextjs.org) 构建，需要 Node.js v18.17+。

**1. 克隆仓库**
```
git clone https://github.com/once-ui-system/magic-portfolio.git
```

**2. 安装依赖**
```
npm install
```

**3. 启动开发服务器**
```
npm run dev
```

**4. 编辑配置**
```
src/app/resources/config
```

**5. 编辑内容**
```
src/app/resources/content
```

**6. 创建博客文章 / 项目**
```
在 src/app/blog/posts 或 src/app/work/projects 目录下新增 .mdx 文件
```

# **文档**

文档地址：[docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

# **功能特性**

## **Once UI**
- 包含 [Once UI](https://once-ui.com) 的所有设计令牌、组件与功能

## **SEO 优化**
- 使用 next/og 自动生成 Open Graph 和 X 平台封面图
- 根据内容文件自动生成结构化数据（Schema）和元数据

## **设计**
- 响应式布局，适配所有屏幕尺寸
- 简洁永恒的设计风格，无繁重动效
- 通过 [data 属性](https://once-ui.com/docs/theming) 提供丰富的自定义选项

## **内容管理**
- 根据内容文件按需渲染页面区块
- 支持开启或关闭博客、作品集、图库、关于 / 简历等页面
- 自动生成并展示社交媒体链接
- 支持为 URL 设置密码保护

## **国际化**
- 提供基于 next-intl 库的多语言版本
- 如需使用国际化功能，请切换到 `i18n` 分支

# **作者**

欢迎在 Threads 或 LinkedIn 上与我们联系。

Lorant Toth：[Threads](https://www.threads.net/@lorant.one)、[LinkedIn](https://www.linkedin.com/in/tothlorant/)  
Zsofia Komaromi：[Threads](https://www.threads.net/@zsofia_kom)、[LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

国际化功能由 [François Hernandez](https://github.com/francoishernandez) 贡献

# **参与贡献**

- 加入 [Discord 上的设计工程师俱乐部](https://discord.com/invite/5EyAQ4eNdS)，与我们分享你的作品集！
- 提交 [Bug 报告](https://github.com/once-ui-system/magic-portfolio/issues/new?labels=bug&template=bug_report.md)。

# **许可证**

本项目基于 CC BY-NC 4.0 许可证分发。
- 不允许商业使用。
- 使用时须注明来源（Attribution）。
- 如需商业授权，请购买 [Once UI Pro](https://once-ui.com/pricing) 许可证以解锁商业使用权。

详情请参阅 `LICENSE.txt` 文件。

# **使用 Vercel 部署**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)
