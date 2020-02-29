import {
  CreateAccount,
  FullnameOnChange,
  EmailOnChange,
  PasswordOnChange,
  ShowPass,
} from '../Actions/RegisterAction';

const INITIAL_STATE = {
  fullname: '',
  email: '',
  password: '',
  showpass: false,
};

const RegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FullnameOnChange:
      return {
        ...state,
        fullname: action.text,
      };
    case EmailOnChange:
      return {
        ...state,
        email: action.text,
      };
    case PasswordOnChange:
      return {
        ...state,
        password: action.text,
      };
    case CreateAccount:
      return {
        state,
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

export default RegisterReducer;
