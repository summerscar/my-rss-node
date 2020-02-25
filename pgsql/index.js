const { Client } = require('pg');

let config = {}
if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  }
}
const client = new Client(config);

client.connect();

console.log('Database connect ok!')

// promise
// client
//   .query(query)
//   .then(res => console.log(res))
//   .catch(e => console.error(e.stack))

module.exports = client