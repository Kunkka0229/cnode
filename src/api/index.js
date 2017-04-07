import axios from 'axios';

// cnode api 路径前缀
const baseUrl = 'https://cnodejs.org/api/v1';

const baseOpts = {
  url: '/topics',
  method: 'get',
  body: {}
};

const fetchApi = (cfg) => {
  let opts = Object.assign({}, baseOpts, cfg);
  const url = baseUrl + opts.url;
  const method = opts.method;
  const data = opts.body;

  return new Promise((resolve, reject) => {
    axios[method](url, data)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (err) {
        reject(err);
      })
  })
};

export default fetchApi;
