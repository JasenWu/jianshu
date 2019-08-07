


import {CHANGE_ATICLE_LIST} from './constants'

import {getArticleList as getData} from '../../../api/api'

 
 
export const getList = ()=>{
  return (dispatch)=>{
    getData().then((data)=>{
       
      const action = {
        type:CHANGE_ATICLE_LIST,
        value:data || []
      }
      return  dispatch(action);
    });
     
  }
}
