import {FabOnchange} from '../Actions/ProfileActions';

const INITIAL_STATE = {
  active: false,
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
  console.log('yoyoyoyoy');
  switch (action.type) {
    case FabOnchange:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
