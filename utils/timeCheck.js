const db = require('./db')
const TIMEEXPIRE = 1000 * 60 * 30  //  30分钟检测一次rss

module.exports = function (key) {
  let lastTime = db.get(key).value()
  let needRefresh = true
  if (lastTime) {
    needRefresh = new Date().getTime() - lastTime > TIMEEXPIRE
  }
  return needRefresh
}