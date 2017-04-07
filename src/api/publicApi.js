import fetchApi from './index';

// 登录
export const login = (data) => {
  return fetchApi({
    url: '/accesstoken',
    method: 'post',
    body: {accesstoken: data.accesstoken}
  })
};

// 主题首页
export const getTopics = (data) => {
  return fetchApi({
    url: '/topics',
    body: {params: {...data}}
  })
};

// 主题详情页
export const getTopic = (url) => {
  return fetchApi({
      url: url
  })
};

