# 使用Node.js作为基础镜像
FROM node:16-alpine

    
# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json文件到工作目录
COPY package*.json ./

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install
# 拷贝 上面生成的 node_modules 文件夹复制到最终的工作目录下
COPY --from=install /app/node_modules ./node_modules
# 复制应用程序代码到工作目录
COPY . .

# 构建Next.js项目
RUN pnpm run build

# 暴露端口（根据您的Next.js配置修改端口号）
EXPOSE 6088

# 运行Next.js应用
CMD ["pnpm","run", "start"]


