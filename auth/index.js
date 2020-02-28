import axios from 'axios'

export function getOauthToken() {
  const options = {
      method: 'POST',
      url: 'https://' + authvalues.DOMAIN + '/oauth/token',
      data: {
          client_id : authvalues.API_CLIENTID,
          client_secret : authvalues.API_CLIENTSECRET,
          audience : 'https://' + authvalues.DOMAIN + '/api/v2/',
          grant_type : 'client_credentials',
      },
  };

  const resp = axios(options)
  return resp
}

export async function getUser(token, userid) {
  const getoptions = {
      method: 'GET',
      url: 'https://' + authvalues.DOMAIN + '/api/v2/users/' + userid,
      headers: {
          authorization : 'Bearer ' + token,
      }
  };

  const user = await axios(getoptions);
  return user;
}