import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        username: ""
    },
    getters: {
        // 获取状态集里的数
        getUserName(state) {
            return state.username
        }
    },
    mutations: {
        // 同步
        // 这里不可以http请求数据
        updateUserName(state, username) {
            state.username = username
        }
    },
    actions: {
        // 异步
        // 这里可以http请求数据
        // 这个用 dispatch调用
        actionUserName(context) {
            context.commit('updateUserName', username)
        }
    }
})