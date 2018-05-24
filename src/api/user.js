import fetch from '../utils/fetch'

// 获取所有新闻列表
export function login (userName, password) {
  const data = {
    userName,
    password
  }
  return fetch({
    url: 'user/login',
    method: 'post',
    data
  })
}
