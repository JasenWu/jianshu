

import axios from 'axios';
import {CHANGE_LIST} from './constants'
import {SEARCH_FOCUS,SEARCH_BLUR} from './constants'
export const  searchFocusAction = ()=>{
    const action = {
      type:SEARCH_FOCUS
    }
    return action;
}

export const searchBlurAction = ()=>{
  const action = {
    type:SEARCH_BLUR
  }
   return action;
}

export const getList = ()=>{
  return (dispatch)=>{
     axios.get('http://rd-yapi.qutoutiao.net/mock/832/hr/test').then((res)=>{
        const action = {
          type:CHANGE_LIST,
          value:res.data.data || []
        }
       return  dispatch(action);
      })
  }
}
