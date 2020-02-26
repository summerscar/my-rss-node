const router = require('koa-router')()
const client = require('./../pgsql')
const {translateText} = require('./../utils')

router.prefix('/api/auth')

router.get('/youtube/:name', async (ctx, next) => {
  let {offset} = ctx.query
  let {name} = ctx.params
  let {rows} = await client.query(`SELECT * FROM videos WHERE name='${name}' AND url IS NOT NULL order by isodate desc limit 8 offset ${offset || 0};`)
  let prefix = process.env.VIDEOURL || 'https://myrssvideo.s3.jp-tok.cloud-object-storage.appdomain.cloud/'
  rows.forEach(item => {
    item.url =  prefix + item.url
  })
  ctx.body = {
    items: rows
  } 
})
router.get('/translate', async (ctx, next) => {
  let content = ctx.query.content
  try {
    let result = await translateText(content)
    ctx.body = {result}
  } catch(err) {
    ctx.body = {err}
  }
})

module.exports = router
