var request = require("request");
const authConfig = require('./config');

const secret = process.env.AUTH0SECRET;

if (!secret) throw 'NO AUTH0SECRET';

function getBearer () {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'POST',
      url: `https://${authConfig.domain}/oauth/token`,
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      form: {
        grant_type: 'implicit',
        client_id: authConfig.clientId,
        client_secret: secret,
        audience: `https://${authConfig.domain}/api/v2/`
      }
    };
    
    request(options, function (error, response, body) {
      if (error) {
        reject(error)
      }
      resolve(body)
    });
  })
};

function getUser (authorization, userid) {
  return new Promise(async (resolve, reject) => {
    // let { access_token } = await getBearer()
    const options = {
      method: 'GET',
      url: `https://${authConfig.domain}/api/v2/users/${userid}`,
      headers: {
        'content-type': 'application/json',
        authorization
      }
    };
    
    request(options, async  (error, response, body) => {
      if (error) {
        reject(error)
      }
      resolve(JSON.parse(body))
    });
  })
}

function updateUser (authorization, userid, id, title, area) {
  return new Promise(async (resolve, reject) => {
    let user = await getUser(authorization, userid)
    let user_metadata = user.user_metadata
    if (!user_metadata) {
      user_metadata = {}
    }
    if (!user_metadata[area]) {
      user_metadata[area] = []
    }
    console.log(user_metadata)

    !user_metadata[area].find(item => item.id === id) && user_metadata[area].push({id, title, time: new Date().getTime()})

    const options = {
      method: 'PATCH',
      url: `https://${authConfig.domain}/api/v2/users/${userid}`,
      headers: {
        'content-type': 'application/json',
        authorization
      },
      json: {
        user_metadata
      }
    };
    
    request(options, function (error, response, body) {
      if (error) {
        reject(error)
      }
      resolve(body)
    });
  })
}

module.exports = { getBearer, updateUser }