import {onTyping, clearField} from '../Actions/ChatActions';

const INITIAL_STATE = {
  text: '',
};

const ChatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case onTyping:
      return {
        ...state,
        text: action.text,
      };
    case clearField:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default ChatReducer;
