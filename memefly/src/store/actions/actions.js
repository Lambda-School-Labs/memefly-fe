import axios from 'axios';

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
    console.log("Dispatch: ", dispatch);
    dispatch({type: LOGIN_USER_START})
    return axios
}

// Generate meme

export const GENERATE_MEME_START = 'GENERATE_MEME_START';
export const GENERATE_MEME_SUCCESS = 'GENERATE_MEME_SUCCESS';
export const GENERATE_MEME_FAILURE = 'GENERATE_MEME_FAILURE';


export const generateMeme = () => dispatch => {
    console.log('test')
    dispatch({type: GENERATE_MEME_START});
    return axios({
        method: "POST",
        // url: "http://memefly.herokuapp.com/api/accounts",
        url:"https://localhost:5000/api/",
        data: {
            query:  `
            query{
            getBaseMeme( rand:'true'){
                message
                fetched
                meme_bounding_box
                meme_id
                meme_url
                meme_text
                }
            }
            `
        }
    })
    .then((res) => {
        console.log(res); 
        // dispatch({
        // type:GENERATE_MEME_SUCCESS,
        // payload: res.data}
        // );
    })
    .catch((err) =>{
        dispatch({
        type:GENERATE_MEME_FAILURE, 
        payload:err});
        console.log(err)
    });
};
  