import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from '../../actions/userAction';

const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
