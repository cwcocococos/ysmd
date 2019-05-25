import axios from "axios";
const state = {
    token: localStorage.token,
    userReg:[],// 管理员日志
};
const mutations = {
    // 退出登陆
    OUT_REGISTER(state){
        localStorage.clear();
        state.token=localStorage.token;
        console.log(state.token);
    },
    // 登陆成功以后，设置token
    SET_TOKEN(state,token){
        state.token = localStorage.token = token;
        console.log(22222);
    },
    SET_USER_REG(state,userReg){
        state.userReg = userReg;
    }
}
const actions = {
    // 完成异步请求，实现登陆功能
    // login(content,obj){
    //     axios.post("login",obj.parmas)
    //         .then(data=>{
    //             obj.cb(data);
    //         })
    //     // axios.post("login",{
    //     //     adminName:params.adminName,
    //     //     passWord:params.passWord
    //     // })
    // }

    register({commit},that){
        axios.post("register",that.userForm)
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
        // axios.post("login",{
        //     adminName:params.adminName,
        //     passWord:params.passWord
        // })
    },

    // 获得管理员日志
    getUserReg({commit,rootState},params){
        // commit("SET_IS_LOADING",true);
        // console.log()
        axios.get("userReg",{
            params

        })
            .then(data=>{
                // commit("SET_IS_LOADING",false);
                if(data){
                    commit("SET_USER_REG",data.userReg);
                    commit("SET_PAGE_INFO",{
                        pageIndex:data.pageIndex,
                        pageSum:data.pageSum
                    })
                }
            })
    }
};
export default {
    state,
    mutations,
    actions
}