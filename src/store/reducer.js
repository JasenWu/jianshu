import { combineReducers } from 'redux-immutable';

import {reducer as  HeadReducer} from '../views/common/header/store/index'
import {reducer as  HomePageReducer } from '../views/home/store/index'
import {reducer as  LoginReducer } from '../views/login/store/index'
const Reducer =  combineReducers({
  header: HeadReducer,
  HomePage:HomePageReducer,
  LoginReducer:LoginReducer
})

export default Reducer;

