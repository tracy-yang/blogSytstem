import axios from 'axios'
import { Message } from 'element-ui'

/*  会报错,无法链接无法带上该baseUrl
// var instance = axios.create({
//     baseUrl: 'https://www.easy-mock.com/mock/59acdaa3e0dc6633419ad3bc/example',
//     timeout: 5000,
// })
*/
axios.defaults.baseURL = 'http://localhost:3000/' // 设置全局的baseUrl

// axios request拦截器
axios.interceptors.request.use(
  config => {
    // 需要设置的部分
    return config
  },
  error => {
    // 需要设置的部分
    return Promise.reject(error)
  })

// axios reponse拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data
    // 状态不为200的时候
    if (res.status !== 200) {
      Message({
        message: res.errorMsg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.errorMsg)
    } else {
      return Promise.resolve(response.data)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// export default instance;
export default axios
