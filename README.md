# Taro 小程序

## react hooks + taro3.X + typescript + dva + scss

## 项目资料

测试 appId：
生产 appId:

## 启动并编译项目

```bash
npm install or yarn install
npm run dev or yarn dev
npm run build or yarn build
```

## 结构

```
|-- C端小程序
    |-- .editorconfig
    |-- .eslintignore // eslint配置忽略某些文件不校验（当使用插件时代码过于冗长，不适合修改）
    |-- .eslintrc.js // eslint配置
    |-- .gitignore // git提交忽略配置
    |-- .prettierrc.js // prettier配置文件，让代码更规范
    |-- .stylelintrc.js // stylelint配置，样式的顺序等等
    |-- babel.config.js
    |-- commitlint.config.js // git commit规范
    |-- global.d.ts // 全局ts文件
    |-- node
    |-- package-lock.json
    |-- package.json
    |-- project.config.json // 项目配置
    |-- project.tt.json
    |-- README.md
    |-- tsconfig.json // ts配置
    |-- yarn.lock
    |-- config // taro配置
    |   |-- dev.js
    |   |-- index.js
    |   |-- prod.js
    |-- src
        |-- app.config.ts // 全局页面配置
        |-- app.scss
        |-- app.tsx
        |-- index.html
        |-- components // 全局组件
        |-- models // dva models层
        |   |-- global.ts
        |   |-- index.ts
        |-- pages // 主包
        |   |-- index
        |       |-- index.config.ts
        |       |-- index.interface.ts
        |       |-- index.scss
        |       |-- index.tsx
        |-- services // 服务 api管理
        |   |-- api.ts
        |   |-- index.ts
        |-- utils 全局方法
            |-- config.ts
            |-- dva.ts
            |-- request.ts
```

## 基础功能

- [x] 集成 redux
- [x] 搭建 dva
- [x] 适配 hook
- [x] 集成 sass
- [x] eslint 代码校验
- [x] cz-customizable git 校验
- [x] 区分环境变量
- [x] 封装公用请求
- [x] 项目文档
- [x] stylelint 校验样式

### 代码格式

vscode 必须安装 prettier 插件
项目里有配置格式化内容

## 提交规范

提交时需要遵守 commit 规范，否则会提交失败
详细看配置文件
