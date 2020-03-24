import {SearchBoolean} from '../Actions/HomeAction';

const INITIAL_STATE = {
  search: false,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchBoolean:
      return {
        ...state,
        search: action.boolean,
      };
    default:
      return state;
  }
};

export default HomeReducer;
