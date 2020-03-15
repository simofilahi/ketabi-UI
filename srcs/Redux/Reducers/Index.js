import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import HomeReducer from './HomeReducer';
import AccountReducer from './AcountReducer';
import ProfileReducer from './ProfileReducer';

export default rootReducer = combineReducers({
  Login: LoginReducer,
  Register: RegisterReducer,
  Home: HomeReducer,
  Account: AccountReducer,
  Profile: ProfileReducer,
});
