import {fromJS} from 'immutable'
 
const defaultStore = fromJS({
  list:[1,2,3,4]
})

export default (state = defaultStore , action )=>{
 
  switch(action.type){
    
    default:
        return state;
  }

} 