import axios from  'axios'
import router from '../router'

console.log(process.env.NODE_ENV, '我是请求里面的我到底是什么环境...............')

//请求的配置信息
var config ={
}

class Http {
  constructor (config){
      this.axios = axios.create({
        baseURL: config.baseURL
      })
      this.axios.defaults.headers.post['Content-Type']='application/json;charse=UTF-8'
      this.interceptorsRequest() //请求拦截器
      this.interceptorsResponse() //响应拦截器
    }
  interceptorsRequest () { //请求拦截器
    this.axios.interceptors.request.use(function (config) {
      if(config.method == "post"){
      }

      console.log(config)
      return config;
    }, function (error) {
      console.log(error)
      return Promise.reject(error);
    });
  }

  interceptorsResponse () { //响应拦截器
    this.axios.interceptors.response.use(function (response) {
      //router.push({name:'login'}) //拦截未登录去登录操作
      //console.log(response)
      if (response && (response.status === 200 )) {
        return response.data
      }
    }, function (error) {
      console.log('&网络异常&')
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }


  get(url,params={}){
    return this.axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000
    })
  }

  post(url,params={}){
    return this.axios({
      method: 'post',
      url,
      params, // get 请求时带的参数
      transformRequest:[function () { //修复  axios Content-Type 无效的 bug
        return JSON.stringify(params)
      }],
      timeout: 10000,

    })
  }
}

export const http = new Http(config)


