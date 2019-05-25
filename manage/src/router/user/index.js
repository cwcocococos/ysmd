import userMy from "@/components/user/my"
import isRegister from "@/components/common/isRegister"
import userReg from "@/components/user/reg"
export default [
    {
        path: '/isRegister',
        name: 'isRegister',
        component: isRegister
    },
    {
        path: '/userMy',
        name: 'userMy',
        component: userMy,
    },{
        path: '/userReg',
        name: 'userReg',
        component: userReg,
    }
]