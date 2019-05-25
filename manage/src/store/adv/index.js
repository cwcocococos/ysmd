import axios from "axios";
const state = {
    advTypeList:[],
    allAdvTypeList:[]
};
const mutations = {
    SET_SHOP_TYPE_LIST(state,advTypeList){
        state.advTypeList = advTypeList;
    },
    SET_ALL_SHOP_TYPE_LIST(state,allAdvTypeList){
        state.allAdvTypeList=allAdvTypeList;
    }
};
const actions = {
    getAdvTypeList({commit},params){
        axios.get("getAdvTypeList",{
            params
        }).then(data=>{
            commit("SET_SHOP_TYPE_LIST",data.advTypeList);
            commit("SET_PAGE_INFO",{
                pageIndex:data.pageIndex,
                pageSum:data.pageSum
            })
        })
    },
    getAllAdvTypeList(content){
        axios.get("getAllAdvTypeList")
            .then(data=>{
                content.commit("SET_ALL_SHOP_TYPE_LIST",data.advTypeList);
            })
    }
};
export default {
    state,
    mutations,
    actions
}