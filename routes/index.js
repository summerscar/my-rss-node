const router = require('koa-router')()
const client = require('./../pgsql')
const MeCab = new require('mecab-async')
mecab = new MeCab()

router.prefix('/api')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/youtube/:name', async (ctx, next) => {
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
router.get('/mecab', async (ctx, next) => {
  let conent = ctx.query.content
  console.log(conent)
  let promise = new Promise((resolve, reject) => {
    mecab.wakachi(conent, function(err, result) {
        if (err) {
          console.log('err', err)
          reject()
        }
        resolve(result)
    });
  })

 let result = await promise
  ctx.body = {
    result: result.join(' ')
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
