const router = require('koa-router')()
const client = require('./../pgsql')
const {translateText} = require('./../utils')
const MeCab = new require('mecab-async')
mecab = new MeCab()

router.prefix('/api/auth')

router.get('/youtube/:name', async (ctx, next) => {
  let {offset} = ctx.query
  let {name} = ctx.params
  let {rows} = await client.query(`SELECT * FROM videos WHERE name='${name}' AND url IS NOT NULL order by isodate desc limit 4 offset ${offset || 0};`)
  let prefix = process.env.VIDEOURL || 'https://myrssvideo.s3.jp-tok.cloud-object-storage.appdomain.cloud/'
  rows.forEach(item => {
    item.url =  prefix + item.url
  })
  ctx.body = {
    items: rows
  } 
})

router.post('/mecab', async (ctx, next) => {
  let content = ctx.request.body.content
  let promise = new Promise((resolve, reject) => {
    mecab.wakachi(content, function(err, result) {
        if (err) {
          console.log('err', err)
          reject()
        }
        resolve(result)
    });
  })

 let result = await promise
  ctx.body = {
    result: result
  }
})

router.post('/translate', async (ctx, next) => {
  let content = ctx.request.body.content
  try {
    let result = await translateText(content)
    ctx.body = {result}
  } catch(err) {
    ctx.body = {err}
  }
})

module.exports = router
