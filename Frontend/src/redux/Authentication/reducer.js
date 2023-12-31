import {
  GET_DATA_REQ,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_REQ,
  POST_DATA_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQ,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_REQ,
  USER_SIGNUP_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  userData: [],
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQ:
      return { ...state, isLoading: true, isError: false };
    case USER_SIGNUP_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case USER_SIGNUP_ERROR:
      return { ...state, isLoading: false, isError: true };

    case USER_LOGIN_REQ:
      return { ...state, isLoading: true, isError: false };
    case USER_SIGNUP_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, isError: false };
    case USER_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };

    case POST_DATA_REQ:
      return { ...state, isLoading: true, isError: false };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case POST_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };

    case GET_DATA_REQ:
      return { ...state, isLoading: true, isError: false };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isError: false,
      };

    default:
      return state;
  }
};
