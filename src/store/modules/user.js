import Cookies from 'js-cookie'

const user = {
  state: {
    userName: Cookies.get('userName')
  },
  mutations: {
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    }
  },
  actions: {
    set_userName ({commit}, name) {
      commit('SET_USERNAME', name)
      Cookies.set('userName', name)
    },
    logout ({commit}) {
      commit('SET_USERNAME', '')
      Cookies.remove('userName')
    }
  }
}

export default user
