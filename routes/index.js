const router = require('koa-router')()
const {db, refreshCheck} = require('./../utils')
const client = require('./../pgsql')

router.prefix('/api')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/free/youtube/:name', async (ctx, next) => {
  let {offset} = ctx.query
  let {name} = ctx.params
  let {rows} = await client.query(`SELECT * FROM videos WHERE name='${name}' AND url IS NOT NULL order by isodate desc limit 4;`)
  let prefix = process.env.VIDEOURL || 'https://myrssvideo.s3.jp-tok.cloud-object-storage.appdomain.cloud/'
  rows.forEach(item => {
    item.url =  prefix + item.url
  })
  ctx.body = {
    items: rows
  } 
})

router.get('/json', async (ctx, next) => {

  ctx.body = {
    title: 'koa2 json',
    res: lastTime,
    needRefresh
  }
})

module.exports = router
