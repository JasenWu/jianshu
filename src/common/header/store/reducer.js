import {fromJS} from 'immutable'

const defaultStore = fromJS({
  focused:false,
})

export default (state = defaultStore , action )=>{
 
  switch(action.type){
    case 'search-focus': 
        return  state.set('focused',true);
    case 'search-blur':
        return  state.set('focused',false);
    default:
        return state;
  }

} 