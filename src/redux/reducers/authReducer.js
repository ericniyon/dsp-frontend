import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCES, LOGOUT_SUCCESS } from "../actions/types";


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    token: localStorage.getItem('token'),
    user: null
}


export default function(state=initialState, action){
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case LOGIN_SUCCES:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
        };

      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isLoading: false,
          isAuthentication: false,
        };
      default:
        return state;
    }
}