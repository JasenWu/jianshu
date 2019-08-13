


import {CHANGE_ATICLE_LIST} from './constants'

import {getArticleList as getData} from '../../../models/api'

export const getList = ()=>{
  return (dispatch)=>{
    getData().then(({retData})=>{
      const action = {
        type:CHANGE_ATICLE_LIST,
        value:retData || []
      }
      dispatch(action);
    });
     
  }
}
