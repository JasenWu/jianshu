import { combineReducers } from 'redux-immutable';

import {reducer as  HeadReducer} from '../common/header/store/index'

const Reducer =  combineReducers({
  header: HeadReducer
})

export default Reducer;

