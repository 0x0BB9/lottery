# lottery
> 基于vue3的抽奖系统

## 技术

- vue3
- threejs
- indexdb
- pinia
- daisyui

## 发布 Github Page 顺序

### 提交代码
npm run build
git add .
git commit -m "Your commit message"
git push origin master

### 发布
npm run deploy

## 开发

安装依赖

```bash
pnpm i
or
npm install
```

开发运行

```bash
pnpm dev
or
npm run dev
```

打包

```bash
pnpm build
or
npm run build
```

预览

```bash
pnpm preview
or
npm run preview
```

若想直接以打开html文件的方式运行，请执行以下命令进行打包。打包完成后在dist目录中直接打开index.html即可。

```bash
pnpm build:file
or
npm run build:file
```

> 项目思路来源于 <https://github.com/moshang-xc/lottery>

## Docker支持

构建镜像

```bash
docker build -t lottery .
```

运行容器

```bash
docker run -d -p 9279:80 lottery
```

容器运行成功后即可在本地通过<http://localhost:9279/lottery/>访问

## License

[MIT](http://opensource.org/licenses/MIT)
