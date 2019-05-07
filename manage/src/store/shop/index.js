import axios from "axios";
const state = {
    shopTypeList:[]
};
const mutations = {
    SET_SHOP_TYPE_LIST(state,shopTypeList){
        state.shopTypeList = shopTypeList;
    }
};
const actions = {
    getShopTypeList({commit},params){
        axios.get("getShopTypeList",{
            params
        }).then(data=>{
            commit("SET_SHOP_TYPE_LIST",data.shopTypeList);
            commit("SET_PAGE_INFO",{
                pageIndex:data.pageIndex,
                pageSum:data.pageSum
            })
        })
    }
};
export default {
    state,
    mutations,
    actions
}