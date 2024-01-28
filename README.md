# ipfy
## 説明
ipfy.orgのAPIを使ってグローバルIPアドレスを取得する

## インストール
```
$ npm i @zaburoh/ipfy
```

## TypeScript
```
$ npm i -D typescript ts-node
```

## サンプルコード
```
$ touch app.ts
// or 
$ touch app.mjs
```

```
import { Ipfy } from '@zaburoh/ipfy';

(async () => {
  const globalIp = await Ipfy.getGlobalIp();
  console.log(globalIp); // xxx.xxx.xxx.xxx
})();
```

## 実行
```
$ npx ts-node app.ts
// or
$ node app.mjs 
```