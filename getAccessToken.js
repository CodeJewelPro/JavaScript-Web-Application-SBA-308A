var request = require('request');

var options = {
  uri: 'https://anilist.co/api/v2/oauth/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json: {
    'grant_type': 'authorization_code',
    'client_id': '20083',
    'client_secret': 'o6J3lYtwZ7CA0bI80NqmzY17GImbO6N6ZYntBOxN',
    'redirect_uri': 'http://localhost:3000', // http://example.com/callback
    'code': 'def5020067e9befbde287e51452e330534c6fe987c113da7e4c4858b0c716e9ec808273d33f13ce2a539f3bbccd4b60a0887aadd7759341f15cb0bbeb40d1550943724d0f9d1357086fac7e47a234576414c7d9674b04dc10012750cbda15a747e08b7184c1405298c89cda1c037d2e23a68b69f45504be37af269f574a1d5232fa1e825d75c1be17b7564502e6f604bf541acab9a32ce1275789e080d6ecd2c840121f9d58c16ac4898f9dc74a8592b7784232bf0010486eb387df8a0e217f6f0d21c15c71a1e62b0c0e6eff3bbcf4b0e462d07753343dce68c80c45044d0064312a0d3eb4996683d498f5a7bd506ee97d761a3cadd528cfd58e5de88903eaf7ed35c3032027e11ab891e8cade38007fb52440e63d3726f88d8e38e6c70de445f02200e766d581550bda584cba8c7b8b4794d9ec1525665ae7484b362cdf0d4b29616f08ba685ddf14fb2ae4794df6d68ee77b8977b21d39864c54e6905b2e6', // The Authorization Code received previously
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.access_token);
  }
});