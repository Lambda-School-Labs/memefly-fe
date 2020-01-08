import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions/actions"


const initialState = {
    message:'',
    isLoggedIn: false,
    isFetching: false,
    errors: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER_START:
            return{
                ...state,
                isFetching:true,
                isLoggedIn:false,
                errors:null

            };
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                isFetching:false,
                isLoggedIn: true,
                errors:null,
            };
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                isFetching:false,
                isLoggedIn:false,
                errors: action.payload,
            }
        default:
            return state;
    }
    
}