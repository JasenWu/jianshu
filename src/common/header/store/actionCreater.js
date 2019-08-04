


import {CHANGE_LIST} from './constants'
import {SEARCH_FOCUS,SEARCH_BLUR} from './constants'
import {getList as getData} from '../../../api/api'

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
    getData().then(({data})=>{
      const action = {
        type:CHANGE_LIST,
        value:data || []
      }
     return  dispatch(action);
    });
     
  }
}
