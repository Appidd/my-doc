# 部署、Nginx 与 Docker 基础

全栈开发需要具备基础部署意识：代码写完只是第一步，真正上线还要处理构建、环境变量、代理、证书、日志和回滚。

## 前端部署链路

```text
pnpm install
  -> pnpm build
  -> 生成 dist
  -> 上传服务器
  -> Nginx 指向静态目录
  -> 配置接口代理
  -> 验证页面与接口
```

VitePress、Vue 后台、小程序 H5 页面都可以按这个思路处理。重点是区分构建产物和源码，线上只需要部署构建后的静态资源。

## Nginx 静态站点示例

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/my-doc;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

常见注意点：

- 单页应用刷新 404 时，需要 `try_files` 回退到 `index.html`。
- 接口代理要确认路径是否重复，例如 `/api/api`。
- HTTPS 证书、跨域、Cookie 域名会影响登录态。
- 上线前要检查构建目录、资源路径和接口环境。

## Docker 基础认知

Docker 适合把运行环境固化下来，减少“我本地可以”的问题。

```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

常用命令：

```bash
docker build -t my-doc:latest .
docker run -d -p 8080:80 --name my-doc my-doc:latest
docker logs my-doc
docker stop my-doc
```

## 发布检查清单

- 构建命令是否成功。
- 环境变量是否正确。
- 接口代理是否指向正确环境。
- 静态资源路径是否 404。
- 登录、列表、详情、提交等核心链路是否可用。
- 服务日志是否有异常。
- 是否保留上一个版本以便快速回滚。

## 对求职的价值

具备部署能力意味着不仅能完成页面和接口开发，还能参与上线、定位生产问题、协助运维排障。对全栈岗位来说，这是非常有说服力的能力补充。
