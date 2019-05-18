import axios from "axios";
const state = {
    shopTypeList:[],
    allShopTypeList:[]
};
const mutations = {
    SET_SHOP_TYPE_LIST(state,shopTypeList){
        state.shopTypeList = shopTypeList;
    },
    SET_ALL_SHOP_TYPE_LIST(state,allShopTypeList){
        state.allShopTypeList=allShopTypeList;
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
    },
    getAllShopTypeList(content){
        axios.get("getAllShopTypeList")
            .then(data=>{
                content.commit("SET_ALL_SHOP_TYPE_LIST",data.shopTypeList);
            })
    }
};
export default {
    state,
    mutations,
    actions
}