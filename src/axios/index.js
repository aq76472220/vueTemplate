import axios from 'axios'
import qs from 'qs'


axios.defaults.baseURL = 'https://rrxc.weihubao.com/';
axios.defaults.timeout = 5000;



axios.interceptors.request.use((config) => {// 请求之前要处理的事情(比如说开始loading动画)
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  return Promise.reject(error);
});


axios.interceptors.response.use((res) =>{// 响应后要处理的事情(比如说全局处理里code如果是200才返回数据否则不返回,结束loading动画)
  if(res.data.code != '200'){
    // _.toast(res.data.msg);
    // return Promise.reject(res);
  }
  console.log(res)
  return res.data;
}, (error) => {
  console.log(error, '请求超时')
  return Promise.reject(error);
});

export  default  axios
