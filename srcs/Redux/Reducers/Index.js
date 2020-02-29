import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

export default rootReducer = combineReducers({
  Login: LoginReducer,
  Register: RegisterReducer,
});
