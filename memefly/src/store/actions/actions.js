import axios from 'axios';
import { dispatch } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

// USED IN REGISTRATION FORM
export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const addUser = (newUser) => dispatch => {
    dispatch({type:ADD_USER_START});

}

// USED IN LOGIN FORM
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS  = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE  = 'LOGIN_USER_FAILURE'

export const userLogin = () => dispatch =>{
    dispatch({type: LOGIN_USER_START})
    return 
}
  