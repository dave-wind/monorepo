### monorepo
> 同时管理多个仓库 包含 vue react ui hooks ts 业务项目 pnpm 7+版本

```js
0. pnpm 介绍可看官网, pnpm + workspace 可以替代 lerna 管理多个包

1. npm install pnpm -g  // 全局安装

    a.  pnpm init  // 类似 npm init 会创建 package.json;初始化 如果报错 windows 系统请在 cmd 里操作


2. 新建 pnpm-workspace.yaml  // 设置 workspace 类似一个个隔离的项目空间

3.修改package:

    a.指定你的软件能够运行的 Node 版本和 pnpm 版本
    {
        "engines": {
            "node": ">=14",
            "pnpm": ">=7"
        }
    }   

4. .npmc
// 当使用workspace协议声明依赖，pnpm 只会从此 workspace 链接所需包,额外包不会install 
1.link-workspace-packages= false. 
通俗解释就是：设置为false 当我想在一个项目 安装 packages的公共模块：比如common 执行如下会报错：
pnpm -r --filter vite-vue install @DAO/common // 因为他会从 远程npm仓库去找 @DAO/common 而不是从本地

2.如果 strict-peer-dependencies= true 树中缺少对等依赖项或对等依赖项 就会报错, 设置false 就不会  
3.shamefully-hoist = true //（eg:安装vue3.0+ node_modules下分别包含组合式包+ 传统选项式包）这里是把node_modules/pnpm下的@vue 组合式api依赖提升到node_modules下 可直接引入调用


5.packages 安装 子包
  1.npm init;
  //  以packages/common 公共包为例:
  2.pnpm install -r --filter @DAO/common  // 类似 npm init


6.构建build 公共资源
// 7+版本 先切换 再执行 scripts 命令; 前提是 @DAO/common(package/common) pkg.json 有 build指令
eg: pnpm --filter @DAO/common run build


7.工作区内 包与包之间引用 是通过 symbolic链接资源
    a.工具库
    修改目标包 package.json 通过相对路径 引用
    比如 packages/rhooks包 依赖 packages/common 包,相对路径去写 pkg: 
    "dependencies": {
        "@DAO/common": "workspace:../common",
    }
    pnpm -r --filter @DAO/rhooks // 安装依赖 -r: pnpm rebuild 重新build

    b.ui库 待续..


8.运行 apps内 业务项目: (vite-app)
先增加pkg workspace 依赖:
  "dependencies": {
    "@DAO/common": "workspace:*" // 硬链接.pnpm-store  vite-app node_modules下就会找到该依赖
  },

先安装: 
pnpm i -r --filter vite-app // pkg.json name: vite-app 
运行:
pnpm --filter vite-app start // 根据 pkg scripts 脚本名称来 这里是: scripts:dev

就会看到依赖的包 效果:
...
```
<img width="600" alt="image" src="https://user-images.githubusercontent.com/28003460/192110690-e8e84701-8094-4e39-9e40-b5f44540d1ea.png">


```js
注意⚠️: pnpm 7+版本 最好先切换到目标workspace 在 运行 pkg 脚本
参考: 
https://pnpm.io/zh/
https://segmentfault.com/a/1190000008832423 // npm scripts 知识
```

> Run
```js
俩种方式运行demo：
1. pnpm -C apps/vite-vue dev  // -C 切换workspace 运行 package.json  scripts脚本

2.filter:
pnpm --filter vite-vue dev // 利用filter 切换 运行package.json  scripts脚本

本质一样
```

>注意
```js
1.举例：
 // 表示把package的 公共包 安装在根目录 root node_modules
pnpm install @DAO/common  -w 

2.pnpm -r --filter @DAO/common build 重新build完 

在 apps demo里 直接生效  软连接~ 效率很高

```