import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import HomeReducer from './HomeReducer';

export default rootReducer = combineReducers({
  Login: LoginReducer,
  Register: RegisterReducer,
  Home: HomeReducer,
});
