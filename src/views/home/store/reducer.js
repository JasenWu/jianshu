import {fromJS} from 'immutable'
 import {CHANGE_ATICLE_LIST} from './constants'
const defaultStore = fromJS({
  list:[1,2,3,4,5,6],
  articlList:[]
})

export default (state = defaultStore , action )=>{
 
  switch(action.type){
    case CHANGE_ATICLE_LIST:
      return state.set('articlList',fromJS(action.value));
 
    default:
        return state;
  }

} 