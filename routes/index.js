const router = require('koa-router')()
const {db, refreshCheck} = require('./../utils')
const client = require('./../pgsql')

router.prefix('/api')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/youtube/:name', async (ctx, next) => {
  let {name} = ctx.params
  let {rows} = await client.query(`SELECT * FROM videos WHERE name='${name}'`)

  ctx.body = {
    items: rows.sort((b, a) => +new Date(a.pubdate) - +new Date(b.pubdate))
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
