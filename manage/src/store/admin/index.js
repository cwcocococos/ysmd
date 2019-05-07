import axios from "axios";
const state = {
    token: localStorage.token,
    adminLog:[],// 管理员日志
}
const mutations = {
    // 退出登陆
    OUT_LOGIN(state){
        localStorage.clear();
        state.token=localStorage.token;
        console.log(state.token);
    },
    // 登陆成功以后，设置token
    SET_TOKEN(state,token){
        state.token = localStorage.token = token;
        console.log(22222);
    },
    SET_ADMIN_LOG(state,adminLog){
        state.adminLog = adminLog;
    }
}
const actions = {
    login({commit},that){
        axios.post("login",that.adminForm)
            .then(data=>{
                that.isLoading = false;
                if(data.ok === 1){
                    that.$message.success("恭喜您，登陆成功");
                    commit("SET_TOKEN",data.token);
                }else{
                    that.$message.error(data.msg);
                }
                console.log(data);
            })
    },

    // 获得管理员日志
    getAdminLog({commit,rootState},params){
        axios.get("adminLog",{
            params

        })
            .then(data=>{
                // commit("SET_IS_LOADING",false);
                if(data){
                    commit("SET_ADMIN_LOG",data.adminLog);
                    commit("SET_PAGE_INFO",{
                        pageIndex:data.pageIndex,
                        pageSum:data.pageSum
                    })
                }
            })
    }
}
export default {
    state,
    mutations,
    actions
}