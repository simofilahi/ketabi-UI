import {
  CreateAccount,
  FullnameOnChange,
  EmailOnChange,
  PasswordOnChange,
  ShowPass,
} from '../Actions/RegisterAction';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  showpass: false,
};

const RegisterReducer = (state = INITIAL_STATE, action) => {
  // console.log('here state ==> ', state);
  switch (action.type) {
    case FullnameOnChange:
      return {
        ...state,
        username: action.username,
      };
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
    case CreateAccount:
      return {
        state,
      };
    case ShowPass:
      return {
        ...state,
        showpass: !state.showpass,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
