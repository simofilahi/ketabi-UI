import { EmailOnChange, PasswordOnChange, ShowPass } from '../Actions/LoginAction';

const INITIAL_STATE = {
  email: '',
  password: '',
  showpass: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmailOnChange:
      return {
        ...state,
        email: action.email,
      };
    case PasswordOnChange:
      return {
        ...state,
        password: action.password,
      };
    case ShowPass:
      return {
        ...state,
        showpass: !state.showpass
      }
    default:
      return state;
  }
};

export default LoginReducer;
