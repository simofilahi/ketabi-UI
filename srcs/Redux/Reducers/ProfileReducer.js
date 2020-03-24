import {FabOnchange, StoreUuid, ProfileInfo} from '../Actions/ProfileActions';

const INITIAL_STATE = {
  active: false,
  uuid: '',
  fullname: '',
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
  console.log('yoyoyoyoy uuid');
  switch (action.type) {
    case FabOnchange:
      return {
        ...state,
        active: !state.active,
      };
    case StoreUuid:
      return {
        ...state,
        uuid: action.uuid,
      };
    case ProfileInfo:
      console.log('here');
      return {
        ...state,
        fullname: action.fullname,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
