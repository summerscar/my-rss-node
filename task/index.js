const Parser = require('rss-parser')
let parser = new Parser();
const {db, refreshCheck, videoDL} = require('./../utils')
const path = require('path')
const fs = require('fs')
class Task {
  constructor (interval) {
    this.interval = interval || 60 * 60 * 1000
    this.queue = Promise.resolve()
  }

  runQueue(task) {
    this.queue = this.queue.then(task).catch(e => {
      throw e
    })
    return this.queue
  }

  run () {
    let list = db.get('list').value()
    // 更新 数据
    Object.keys(list).forEach(site => {
      list[site].forEach(name => {
        this[site](name)
      }
    )})

    // 下载视频
    this.downloadVideo()
  }

  downloadVideo () {
    this.runQueue(() => {
      let youtubes = db.get('youtube').value()
      let allVideos = fs.readdirSync(path.resolve(__dirname, '../videos'))
      Object.keys(youtubes).forEach(youtube => {
        youtubes[youtube].items.forEach((item, index) => {
          this.runQueue(async () => {
            let pathname = path.resolve(__dirname, '../videos')
            let filename = item.title.replace(/\//g, '_')

            // 存在url且videos文件夹中存在时跳过
            if (item.url && allVideos.find(videoname => videoname === filename + '.mp4')) {
              console.log('Skip download: ' + item.title)
              return Promise.resolve()
            }

            await videoDL(item.link, filename, pathname)
            db.set(`youtube.${youtube}.items[${index}].url`, filename + '.mp4').write()
            return Promise.resolve()
          })
        }
      )})
      return Promise.resolve()
    })
  }

  youtube (name) {
    return this.runQueue(async () => {
      console.log(`task youtube start: ${name} 😀`)
      let needRefresh = refreshCheck(`youtube.${name}.time`)
      let feed
      if (needRefresh) {
        feed = await parser.parseURL(`https://rsshub-summerscar.herokuapp.com/youtube/user/${name}`);
        feed.time = new Date().getTime()
    
        let preFeed = db.get(`youtube.${name}`).value()
        if (!preFeed) {
          await db.set(`youtube.${name}`, feed).write()
          console.log(`task youtube created: ${name} 😀`)
        } else {
          await db.set(`youtube.${name}.time`, feed.time).write()
          feed.items = feed.items.filter((item) => {
            return !preFeed.items.find(preitem => preitem.title === item.title)
          })
          await db.get(`youtube.${name}.items`).push(...feed.items).write()
          feed = db.get(`youtube.${name}`)
          console.log(`task youtube updated: ${name} 😀`)
        }
      } else {
        feed = db.get(`youtube.${name}`)
        console.log(`task youtube skipped: ${name} 😀`)
      }
      return Promise.resolve()
    })
  }
}


module.exports = Task