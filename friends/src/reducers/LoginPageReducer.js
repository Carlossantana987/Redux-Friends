import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  loggingIn: false,
  error: null
};

const loginReduce = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };

    default:
      return state;
  }
};

export default loginReduce;
