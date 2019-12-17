import { GENERATE_MEME_START, GENERATE_MEME_SUCCESS, GENERATE_MEME_FAILURE } from "../actions/actions"

const initialState= {
    message:'',
    fetched:false,
    meme_bounding_box:[],
    meme_id:9999,
    meme_url:'',
    meme_text:'',

    status:{
        isFetching:false,
        errors: null,
    }
}


export const memeReducer = (state = initialState, action) => {
    switch(action.type){
        case GENERATE_MEME_START:
            return{
                ...state,
                isFetching:true,
                errors:null,
            }
        case GENERATE_MEME_SUCCESS:
            return{
                ...state,
                isFetching:false,
                errors:null,
            }
        case GENERATE_MEME_FAILURE:
            return{
                ...state,
                isFetching:false,
                errors: action.payload,
            }
        default:
            return state;
    }
}