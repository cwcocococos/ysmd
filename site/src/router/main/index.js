import Phone from "@/components/Home/Phone"
import TV from "@/components/Home/TV"
import Tele from "@/components/Home/Tele"
import Mind from "@/components/Home/Mind"
import Note from "@/components/Home/Note"
import Life from "@/components/Home/Life"
import Main from "@/views/Main.vue"
import Select from "@/components/Home/Select.vue"


export default [
        {
            path:"/",
            alias:"rec",
            component:Main,
            children:[
                {
                    path:"/",
                    alias:"main",
                    component:Select
                },
                {
                    path:"jd",
                    component:Tele
                },
                {
                    path:"ds",
                    component:TV
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
                    path:"bj",
                    component:Note
                },
                {
                    path:"sh",
                    component:Life
                }
            ]
        }
        // {
        //     path:"/sj",
        //     component:Phone
        // },
        // {
        //     path:"/zn",
        //     component:Mind
        // },
        // {
        //     path:"/ds",
        //     component:TV
        // },
        // {
        //     path:"/jd",
        //     component:Tele
        // },
        // {
        //     path:"/bj",
        //     component:Note
        // },
        // {
        //     path:"/sh",
        //     component:Life
        // }
]