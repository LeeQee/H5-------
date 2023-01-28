import axios from 'axios'
import common from './common';
import { Toast } from 'vant'
import router from '../router';
import urls from './url'

// https://www.knowledgesource.cn  //给客户看的线上版本
// http://zkcx.cxstar.cn  //本公司线上版本

const baseURL = common.baseUrl
// const baseURL = process.env.NODE_ENV === 'development' ? common.localUrl : common.localUrl
// const baseURL = process.env.NODE_ENV === 'development' ? 'https://www.knowledgesource.cn' : 'https://www.knowledgesource.cn'
// const baseURL = 'http://zkcx.cxstar.cn/'

const service = axios.create({
  baseURL,
  timeout: 3000000
})
service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('Admin-Token')) {
      // config.headers["If-Modified-Since"] = "0"
      // config.headers["Cache-Control"] = "no-cache"
      config.headers.common['Admin-Token'] = localStorage.getItem('Admin-Token')
    } return config
    
  },
  (error) => {
    Toast('网络有问题，稍等一会')
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const data = response.data
      
      return data
    }
  },
  (error) => {
    Toast('网络有问题，稍等一会')
    return Promise.reject(error)
  }
)


export default service
