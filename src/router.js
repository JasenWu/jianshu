import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './views/home/index'
import Details from './views/details/loadable'
import CommonLayout from './common/layout/layout.js';


export const defaultRouter = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to='/root/home' />
        )
    },
    {
        path: '/404',
        exact: true,
        render: () => {
            return <div>页面正在建设中...</div>
        }
    },
    {
        path: "/root",
        component: CommonLayout,
        routes: [
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