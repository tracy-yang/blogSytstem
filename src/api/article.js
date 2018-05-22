import fetch from '../utils/fetch'

// 获取所有新闻列表
export function getNewsList (state) {
  const data = {
    state
  };
  return fetch({
    url: 'article/getNewsList',
    method: 'post',
    data
  })
}

// 根据ID获取新闻的详细内容
export function getDetailById (id) {
  const data = {
    id
  }
  return fetch({
    url: 'article/detail',
    method: 'post',
    data
  })
}

// 新增新闻
export function addNews (title,content,createUser,state,createTime) {
  const data = {
    title,
    content,
    createUser,
    state,
    createTime
  }
  return fetch({
    url: 'article/addNews',
    method: 'post',
    data
  })
}

export function setState(id,state){
  const data = {
    id,
    state
  }
  return fetch({
    url: 'article/setStateById',
    method: 'post',
    data
  })
}
