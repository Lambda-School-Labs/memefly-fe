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
    // console.log("Dispatch: ", dispatch);
    dispatch({type: LOGIN_USER_START})
    return axios
}

// GENERATES A RANDOM MEME.

export const GENERATE_MEME_START = 'GENERATE_MEME_START';
export const GENERATE_MEME_SUCCESS = 'GENERATE_MEME_SUCCESS';
export const GENERATE_MEME_FAILURE = 'GENERATE_MEME_FAILURE';

//USER UPLOADED IMAGE
export const UPLOAD_IMAGE_START = 'UPLOAD_IMAGE_START'
export const UPLOAD_IMAGE_START_TEST1 = 'UPLOAD_IMAGE_START'


export const generateMeme = () => dispatch => {
    dispatch({type: GENERATE_MEME_START});
    return axios({
        method: "POST",
        // url: "http://memefly.herokuapp.com/api/accounts",
        url:"http://localhost:5000/api/memes/base",
        data: {
            query:  `
            query{
                generateMeme( rand:true ){
                    message
                    fetched
                    meme_bounding_box
                    meme_id
                    meme_url
                    generated_meme_texts
                    }
            }
            `
        }
        
    })
    .then((res) => {
        // console.log(res.data.data.generateMeme); 
        dispatch({
        type:GENERATE_MEME_SUCCESS,
        payload: res.data.data.generateMeme}
        );
    })
    .catch((err) =>{
        dispatch({
        type:GENERATE_MEME_FAILURE, 
        payload:err});
        console.log(err)
    });
};

export const uploadImage =(previewURL)=> dispatch =>{
    console.log("I'M INSIDE THE UPLOAD IMAGE", previewURL);
    dispatch({type: UPLOAD_IMAGE_START, payload: previewURL});
    return{
        payload: previewURL,
    }
}