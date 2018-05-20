import fetch from '../utils/fetch'
import axios from 'axios';

// 获取所有新闻列表
export function getNewsList(){
    // const params = {
    //     rows,
    //     page,
    //     userId
    // };
    return fetch({
        url: 'article/getNewsList',
        method: 'post',
        //params
    })
}

// 根据ID获取新闻的纤细内容
export function getDetailById(id){
    const data  ={
        id
    }
    return fetch({
        url: 'article/detail',
        method: 'post',
        data
    })
}

