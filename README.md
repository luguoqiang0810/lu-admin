# lu-admin

## 项目简介

lu-admin 是一个辅助快捷开发的自动化工程脚手架。

## 项目使用

```bash
# 克隆项目
git clone https://github.com/luguoqiang0810/lu-admin.git

# 进入项目目录
cd lu-admin

# 安装依赖
pnpm install

# 启动项目
pnpm start

# 打包项目
pnpm build

# 预览打包项目
pnpm preview

# 代码检查
pnpm lint

```

<div style="background: rgba(16, 185, 129, .14); padding: 10px;">
	<p>🛎️ 必须使用 Node.js 20 或更高版本</p>
	<p>🛎️ 必须使用 pnpm 作为包管理器</p>
	<p style="margin: 0; padding: 0;">🛎️ 添加 pinia 后，需要重新启动项目才能全局使用</p>
</div>

## 功能特性

## 技术栈

## 项目结构

```
lu-admin
├── public/                  # 静态资源目录
│   └── L.png               # 网站图标
├── src/
│   ├── assets/             # 资源文件
│   │   └── system/         # 脚手架本地资源
│   ├── components/         # 全局公共组件
│   ├── plugins/            # 插件系统
│   │   ├── i18n/          # 国际化配置
│   │   ├── pinia/         # 状态管理
│   │   ├── vxe-table/     # VxeTable 配置
│   │   ├── vxe-ui/        # VxeUI 布局组件
│   │   └── index.ts       # 插件统一入口
│   ├── style/              # 样式文件
│   │   ├── global.less    # 全局样式
│   │   ├── index.less     # 样式入口
│   │   └── style.css      # 样式重置
│   ├── App.vue            # 应用根组件
│   ├── main.ts            # 应用入口
│   └── vite-env.d.ts      # Vite 环境类型
├── types/                 # 类型定义
│   ├── auto-imports.d.ts  # 自动导入类型
│   └── components.d.ts   # 组件类型
├── .editorconfig          # 编辑器配置
├── .gitignore            # Git 忽略配置
├── eslint.config.js      # ESLint 配置
├── index.html            # 首页入口
├── package.json          # 项目依赖配置
└── README.md             # 项目文档
└── stylelint.config.js   # stylelint 配置
├── tsconfig.json         # TypeScript 配置
├── vite.config.ts        # Vite 配置

```
