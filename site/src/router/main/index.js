import Main from "@/views/Main"
import Phone from "@/components/Phone"
import TV from "@/components/TV"
import Tele from "@/components/Tele"
import Mind from "@/components/Mind"
import Note from "@/components/Note"
import Life from "@/components/Life"
export default [
    {
        path:"/Main",
        component:Main,
        children:[
            {
                path:"/",
                alias:"rec",
                component:Main
            },
            {
                path:"sj",
                component:Phone
            },
            {
                path:"zn",
                component:Mind
            },
            {
                path:"ds",
                component:TV
            },
            {
                path:"jd",
                component:Tele
            },
            {
                path:"bj",
                component:Note
            },
            {
                path:"sh",
                component:Life
            }
        ]
    },

]