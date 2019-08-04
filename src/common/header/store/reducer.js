import {fromJS} from 'immutable'
 
import {CHANGE_LIST,SEARCH_BLUR,SEARCH_FOCUS} from './constants'

const defaultStore = fromJS({
  focused:false,
  list:['jiaoyu']
})

export default (state = defaultStore , action )=>{
 
  switch(action.type){
    case SEARCH_FOCUS: 
        return  state.set('focused',true);
    case SEARCH_BLUR:
        return  state.set('focused',false);
    case CHANGE_LIST:
        return  state.set('list',action.value);
    default:
        return state;
  }

} 