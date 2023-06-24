
## docker配置
docker build -t blog:1.0 .
docker run -d --name blog -p 6088:6088 blog:1.0

