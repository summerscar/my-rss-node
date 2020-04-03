# my-rss-node

https://my-rss-node.herokuapp.com/

[my-rss-mobile](https://github.com/summerscar/my-rss-mobile) 后端部分

缘起： 花钱买了个[APP](https://play.google.com/store/apps/details?id=com.eup.japanvoice&hl=en_US)，确实做的挺好的，迫于国内网络，体验极差，怒退款

使用工具： Heroku / RSShub / youtube-dl / IBM cos / Postgresql / Koa2 / React

## 工作流程

1. RSShub订阅Youtube更新
2. youtube-dl下载视频
3. 上传至 IBM objectstore
4. 更新Postgresql数据
5. 生成前端接口

## 第三方API服务

1. [微软文本翻译API](https://www.microsoft.com/zh-cn/translator/business/translator-api/)
2. [YAHOO 文本解析 ルビ振り](https://developer.yahoo.co.jp/webapi/jlp/furigana/v1/furigana.html)

## Feature

* 翻译新闻文本内容
* 假名注音
* 收藏

## ScreenShot

![](./preview/01.png)
![](./preview/02.png)
![](./preview/03.png)
![](./preview/04.png)