const router = require('koa-router')()
const Parser = require('rss-parser')
let parser = new Parser();
const {db, refreshCheck} = require('./../utils')

router.prefix('/api')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/youtube/:name', async (ctx, next) => {
  let {name} = ctx.params
  feed = db.get(`youtube.${name}`).value()
  feed.items = feed.items.sort((b, a) => +new Date(a.pubDate) - +new Date(b.pubDate))
  ctx.body = feed 
})

router.get('/json', async (ctx, next) => {

  ctx.body = {
    title: 'koa2 json',
    res: lastTime,
    needRefresh
  }
})

module.exports = router
