import {EditBoolean} from '../Actions/AccountActions';

const INITIAL_STATE = {
  edit: false,
};

const AccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EditBoolean:
      return {
        ...state,
        edit: action.boolean,
      };
    default:
      return state;
  }
};

export default AccountReducer;
