import advList from "@/components/adv/list"
import advTypeList from "@/components/adv/typeList"
export default [
    {
        path: '/advList',
        name: 'advList',
        component: advList,
        meta:{
            isAuthorization:true
        }
    },
    {
        path: '/advTypeList',
        name: 'advTypeList',
        component: advTypeList,
        meta:{
            isAuthorization:true
        }
    }
]