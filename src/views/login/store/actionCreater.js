


import {CHANGE_ATICLE_LIST} from './constants'

import {getArticleList as getData} from '../../../models/api'
import { login } from '../../../models/api'

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

export const loginaction = (params)=>{
  return (dispatch)=>{
    login(params).then((res)=>{
      console.log('登录成功',params);

    }).catch((err)=>{
      console.log(err);
    })
  }
}
