


import {CHANGE_ATICLE_LIST} from './constants'

import {getArticleList as getData} from '../../../models/api'
import { login,getUser } from '../../../models/api'

export const getList = ()=>{
  return (dispatch)=>{
    getData().then((data)=>{
      const action = {
        type:CHANGE_ATICLE_LIST,
        value:data || []
      }
      dispatch(action);
    });
     
  }
}

export const loginAction = (params)=>{
  return (dispatch)=>{
    login(params).then((res)=>{
      console.log('登录成功',params);

    }).catch((err)=>{
      console.log(err);
    })
  }
}


export const getUserAction = (params)=>{
  return (dispatch)=>{
    getUser(params).then((res)=>{
      console.log('登录成功',res);
    }).catch((err)=>{
      console.log(err);
    })
  }
}


 
