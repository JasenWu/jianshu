import {fromJS} from 'immutable'
 import {CHANGE_ATICLE_LIST} from './constants'
const defaultStore = fromJS({
  user:{
    username:'jason',
    password:'drtyu'
  }
})

export default (state = defaultStore , action )=>{
 
  switch(action.type){
    case CHANGE_ATICLE_LIST:
      return state.set('articlList',fromJS(action.value));
 
    default:
        return state;
  }

} 