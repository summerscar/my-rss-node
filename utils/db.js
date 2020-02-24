const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults(
  { 
    youtube: {}, 
    list: { 
      youtube: ['ANNnewsCH'] // sun2823793
    }
  }
).write()

console.log('db ok')

module.exports = db