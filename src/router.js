
import Home from './views/home/index'
import Details from './views/details/loadable'
import CommonLayout from './common/layout/layout.js';
 

export const defaultRouter = [
    {
        path: "/root",
        component: CommonLayout,
        routes:[
            {
                path: "/root/home",
                component: Home,
                
            },
            {
                path: "/root/details/:id",
                component: Details
            }
        ]
    },
    // {
    //     path: "/home",
    //     exact:true,
    //     component: Home,
    // },
    // {
    //     path: "/details/:id",
    //     exact:true,
    //     component: Details,
    // },
     
]