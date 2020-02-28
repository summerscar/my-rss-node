FROM node:lts-slim

WORKDIR /app

EXPOSE 4000
COPY . /app

#备份旧的配置文件
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak
#替换为我们自定义的配置文件
RUN mv sources.list /etc/apt/
RUN apt-get update
RUN apt-get install libmecab2 libmecab-dev mecab mecab-ipadic mecab-ipadic-utf8 mecab-utils
RUN yarn
CMD ["npm", "run", "start"]%