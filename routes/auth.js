const router = require('koa-router')()
const client = require('./../pgsql')
const {translateText} = require('./../utils')
const request = require('request')
var convert = require('xml-js')
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
/*
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
*/
router.post('/furigana', async (ctx, next) => {
  let {content, grade} = ctx.request.body
  let options = {
    method: 'GET',
    url: 'https://jlp.yahooapis.jp/FuriganaService/V1/furigana',
    qs: {
      'appid': process.env.YAHOO,
      'grade': grade || 6,
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
