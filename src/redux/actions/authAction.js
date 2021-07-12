import { LOGIN_SUCCES, LOGIN_FAIL, LOGOUT_FAIL, LOGOUT_SUCCESS,LOGIN_REQUEST } from "./types";
import axios from 'axios';


export const login = (username, password) => dispatch => {
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({username, password});
    dispatch({
      type: LOGIN_REQUEST,
    });
    axios.post('https://dspbackend-endpoints.herokuapp.com/api/auth/login', body, config)
        .then(res => {
            
            dispatch({
                type: LOGIN_SUCCES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.message
            })
        })
    ;
}

export const logout = () => (dispatch, getState) => {
    const token = getState().authReducer.token

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.post('https://dspbackend-endpoints.herokuapp.com/api/auth/logout', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        })
        .catch(err => {
            dispatch({
                type: LOGOUT_FAIL
            })
        })
    ;
}