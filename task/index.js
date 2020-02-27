const Parser = require('rss-parser')
let parser = new Parser();
const {db, refreshCheck, videoDL, doCreateObject, doCreateBucket} = require('./../utils')
const path = require('path')
const fs = require('fs')
const client = require('./../pgsql')
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

  async run () {
    // let list = db.get('list').value()
    console.log(`🤞 Task running: ${new Date().toLocaleString()}`)
    let {rows} = await client.query('SELECT * FROM list')
    let list = {}
    rows.forEach(item => {
      list[item.site] = item.names
    })
    // list = list.rows
    // 更新 数据
    Object.keys(list).forEach(site => {
      list[site].forEach(name => {
        this[site](name)
      }
    )})

    // 下载视频
    if (process.env.NODE_ENV !== 'development' && process.env.STATUS === 'RUN') {
      this.downloadVideo()
    }
    // this.uploadVideo()
  }
  downloadVideo () {
    this.runQueue(async () => {
      let {rows} = await client.query("SELECT * FROM videos WHERE url IS NULL")

      rows.forEach((item, index) => {
        this.runQueue(async () => {
          let pathname = path.resolve(__dirname, '../videos')
          let filename = item.title.replace(/\//g, '_')

          await videoDL(item.link, filename, pathname)

          await doCreateObject(`${filename}.mp4`, fs.readFileSync(path.resolve(pathname, filename + '.mp4')))
          
          console.log('👏 Upload success: ' + item.title)
          let query = `UPDATE videos SET url = '${filename + '.mp4'}' WHERE ID = ${item.id};`
          await client.query(query)
          return Promise.resolve()
        })
      })
      return Promise.resolve()
    })
  }

  youtube (name) {
    return this.runQueue(async () => {
      console.log(`task youtube start: ${name} 😀`)
      // let needRefresh = refreshCheck(`youtube.${name}.time`)
      let feed

      feed = await parser.parseURL(`https://rsshub-summerscar.herokuapp.com/youtube/user/${name}`);
      
      let {rows} = await client.query(`SELECT * FROM videos WHERE name='${name}'`)
      
      // await db.set(`youtube.${name}.time`, feed.time).write()
      // feed.items = feed.items.filter((item) => {
      //   return !preFeed.items.find(preitem => preitem.title === item.title)
      // })
      let count = 0
      for(let item of feed.items) {
        if (rows.find(row => row.title === item.title)) break
        let query = {
          text: 'INSERT INTO videos(name, title, link, pubdate, content, contentsnippet, guid, isodate) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
          values: [name, item.title, item.link, item.pubDate, item.content, item.contentSnippet, item.guid, item.isoDate]
        }
        let result = await client.query(query)
        count++
      }
    
      console.log(`task youtube updated: ${name} videos: ${count} 😀`)
      return Promise.resolve()
    })
  }
}


module.exports = Task