import axios from  'axios'
import router from '../router'

//请求的配置信息
var config ={
  baseURL:'https://elm.cangdu.org'
}

class Http {
  constructor (config){
      this.axios = axios.create({
        baseURL: config.baseURL,
      })
      this.interceptorsRequest() //请求拦截器
      this.interceptorsResponse() //响应拦截器
    }
  interceptorsRequest () { //请求拦截器
    this.axios.interceptors.request.use(function (config) {
      //config.headers['x-token'] = '111111111111' //用户登录的凭证
      //console.log(config)
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


  get(url,params){
    return this.axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }

  post(url,params){
    return this.axios({
      method: 'post',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}

export const http = new Http(config)


