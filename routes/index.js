const router = require('koa-router')()
const client = require('./../pgsql')
const request = require('request')
const convert = require('xml-js')
// const { getBearer } = require('./../utils/auth')
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

// router.get('/auth0/getBearer', async (ctx, next) => {
//   let res = await getBearer()
//   ctx.body = res
// })

router.get('/kousei', async (ctx, next) => {
  // let {content} = ctx.request.body
  let {content} = ctx.query
  let options = {
    method: 'GET',
    url: 'https://jlp.yahooapis.jp/KouseiService/V1/kousei',
    qs: {
      'appid': process.env.YAHOO,
      'sentence': content
    },
    headers: {
      'Content-type': 'application/json'
    }
  };
  try {
    let promise = new Promise((resolve, reject) => {
      request(options, function(err, res, body) {
        if (err) reject()
        let result = JSON.parse(convert.xml2json(body, {compact: true, spaces: 4}))
        resolve(result.ResultSet && result.ResultSet.Result)
      })
    })
    let result = await promise 
    ctx.body = result
  } catch (e) {
    console.log(e)
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
