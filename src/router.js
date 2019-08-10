import React from 'react'
import Home from './views/home/index'
import Details from './views/details/loadable'


import CommonLayout from './common/layout/layout.js';
console.log('CommonLayout',CommonLayout);

export const defaultRouter = [
    
    {
        path: "/root",
       
        component: CommonLayout,
        routes:[
            {
                path: "/home",
                component: Home,
                
            },
            {
                path: "/details/:id",
               
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