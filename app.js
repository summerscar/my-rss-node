const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const server = require('koa-static')
const index = require('./routes/index')
const users = require('./routes/users')
const auth = require('./routes/auth')
const Task = require('./task')
const mount = require('koa-mount')
const cors = require('koa2-cors')
const jwt = require('koa-jwt');
const jwksRsa = require('jwks-rsa')
const authConfig = {
  "domain": "dev-ymyh-0n9.auth0.com",
  "clientId": "U9Ypez6umr0NvVSRxPfcTwEgj8WGIz6p",
  "audience": "https://dev-ymyh-0n9.auth0.com/api/v2/"
}
// error handler
onerror(app)

app.use(cors({
  origin: function(ctx) {
    console.log(ctx.path)
    if (ctx.path === '/api/kousei') {
      return '*';
    }
    return false;
  }
}));

app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = '401 未登录';
    } else {
      throw err;
    }
  });
});

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/build'))

app.use(mount('/videos', server('videos', {maxage: 360 * 24 * 60 * 60 * 1000})));
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.use(jwt({
  secret: jwksRsa.koaJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
}));

app.use(auth.routes(), auth.allowedMethods())

// Protected middleware
app.use(function(ctx){
  if (ctx.url.match(/^\/api\/jwt/)) {
    ctx.body = 'protected\n';
  }
});

let task = new Task()

task.run()
setInterval(() => {
  task.run()
}, 1000 * 60 * 10)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err)
});

module.exports = app
