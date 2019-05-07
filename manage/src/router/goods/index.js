import goodsList from "@/components/goods/list"
export default [
    {
        path: '/goodsList',
        name: 'goodsList',
        component: goodsList,
        meta:{
            isAuthorization:true// 如果值为true是需要登陆以后才可以进入该路由
        }
    }
]