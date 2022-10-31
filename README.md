### monorepo

> Manage a collection of vite rollup webpack react vue typescript repositories with pnpm monorepo

#### Prepare

```js
npm install nvm -g

nvm use v14.17.0

npm install pnpm -g

// Env
"node": ">=14",
"pnpm": ">=7"

```

#### install

```js

pnpm install -r  //  install all workspace project

```

#### build Or Rebuild

```js

pnpm --filter @neopark/common build

pnpm --filter @neopark/react build

// After run dev ...

```

#### Run Test

```js
vite-vue：
pnpm --filter vite-vue run dev

react：
pnpm --filter react-app run dev

```

#### Publish

```js
npm login

pnpm --filter @neopark/common publish

pnpm --filter @neopark/react publish
```

#### NPM repository

<img width="300" alt="image" src="https://user-images.githubusercontent.com/28003460/199077325-fc2e5918-0933-4ed0-b782-277c3ec21978.png">
