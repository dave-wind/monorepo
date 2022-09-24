### monorepo
> 同时管理多个仓库 包含 ui hooks ts 业务项目 pnpm 7+版本

```js

1. pnpm init // 类似 npm init 会创建 package.json

2. touch pnpm-workspace.yaml  // 设置 workspace 类似一个个隔离的项目空间

3.修改package:

    a.指定你的软件能够运行的 Node 版本和 pnpm 版本
    {
        "engines": {
            "node": ">=14",
            "pnpm": ">=7"
        }
    }   

4. .npmc
link-workspace-packages= false. 当使用workspace协议声明依赖，pnpm 只会从此 workspace 链接所需包,额外包不会install
如果 strict-peer-dependencies= true 树中缺少对等依赖项或对等依赖项 就会报错, 设置false 就不会


5.安装特定工作区资源
 首先需要 npm init 各个单独的项目; 以packages/common 公共包为例:

pnpm install -r --filter @doors/common  // @doors/common 为pkg.json name别名


6.构建build 公共资源
// 7+版本 先切换 再执行 scripts 命令; 前提是 @doors/common(package/common) pkg.json 有 build指令
eg: pnpm --filter @doors/common run build


7.工作区内 包与包之间引用 是通过 硬链接资源
    a.工具库
    修改目标包 package.json 通过相对路径 引用
    比如 packages/rhooks包 依赖 packages/common 包,相对路径去写 pkg: 
    "dependencies": {
        "@doors/common": "workspace:../common",
    }
    pnpm -r --filter @doors/rhooks // 安装依赖 -r: pnpm rebuild 重新build

    b.ui库 待续..


8.运行 apps内 业务项目: (vite-app)
先增加pkg workspace 依赖:
  "dependencies": {
    "@doors/common": "workspace:*" // 硬链接  vite-app node_modules下就会找到该依赖
  },

先安装: 
pnpm i -r --filter vite-app // pkg.json name: vite-app 
运行:
pnpm --filter vite-app start // 根据 pkg scripts 脚本名称来 这里是: scripts:dev

就会看到依赖的包 效果

...


注意⚠️: pnpm 7+版本 最好先切换到目标workspace 在 运行 pkg 脚本

参考: 
https://pnpm.io/zh/
https://segmentfault.com/a/1190000008832423 // npm scripts 知识

```