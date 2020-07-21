/**
 * Author: fanqiang
 * Date: 2020年7月21日12:55:04
 * Description: axios的封装
*/

import axios from 'axios'
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据

//  创建 axios 实例
const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

// 配置请求拦截
instance.interceptors.request.use(config => {
  // console.log('来到了request拦截success中');
  // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

  // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

  // 3.对请求的参数进行序列化(看服务器是否需要序列化)
  // config.data = qs.stringify(config.data)
  // console.log(config);

  // 4.等等
  return config
}, err => {
  // console.log('来到了request拦截failure中');
  return err
})

// 配置响应拦截
instance.interceptors.response.use(response => {
  // console.log('来到了response拦截success中');
  return response.data
}, err => {
  // console.log('来到了response拦截failure中');
  console.log(err);
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break
      case 401:
        err.message = '未授权的访问'
        break
    }
  }
  return err
})

/**
 *  get方法，对应get请求
 *  @param url
 *  @param data
 *  @returns {Promise}
*/
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法,对应post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      reject(err.data)
    })
  })
}