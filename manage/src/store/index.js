import Vue from 'vue'
import Vuex from 'vuex'
import admin from "./admin"
import shop from "./shop"
import config from "./config"
import user from "./user"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        pageInfo:{
            pageIndex:1,
            pageSum:1
        },
        isLoading:false
    },
    mutations:{
        SET_IS_LOADING(state,bool){
            state.isLoading = bool;
        },
        SET_PAGE_INFO(state,info){
            state.pageInfo.pageIndex = info.pageIndex;
            state.pageInfo.pageSum = info.pageSum;
        },
        // 对分页信息实行初始化
        SET_INIT(state){
            state.pageInfo.pageIndex =1;
            state.pageInfo.pageSum =1;
        }
    },
    modules: {
        admin,
        shop,
        config,// 配置模块
        user
    }
})
