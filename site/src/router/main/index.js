import Main from "@/views/Main"
import Phone from "@/components/Home/Phone"
import TV from "@/components/Home/TV"
import Tele from "@/components/Home/Tele"
import Mind from "@/components/Home/Mind"
import Note from "@/components/Home/Note"
import Life from "@/components/Home/Life"
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