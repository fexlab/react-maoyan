import axios from 'axios';
const instance = axios.create({
  timeout: 3000 // 超时时间
})

// 响应拦截
instance.interceptors.response.use(function (response) {
  const { status, data, statusText } = response;
  if (status === 200) {
    return data
  } else {
    console.error(`${status}-${statusText}`);
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
  get: (url, params, option) => {
    return instance.get(url, Object.assign({
      params
    }, option));
  },
  post: (url, params, option) => {
    return instance.post(url, params, option);
  },
  delete: (url, params, option) => {
    return instance.delete(url, Object.assign({
      params
    }, option));
  }
}