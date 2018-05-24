import cookie from 'js-cookie'
import { login } from '@/api/user'

const user = {
  state: {
    userName: 'test03'
  },
  mutations: {
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    }
  },
  actions: {
    login ({commit}, userName) {
      console.log(111111, '进入action方法')
      userName = userName.trim()
    }
  }
}

export default user
