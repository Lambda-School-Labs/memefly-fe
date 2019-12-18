import { GENERATE_MEME_START, GENERATE_MEME_SUCCESS, GENERATE_MEME_FAILURE } from "../actions/actions"

const initialState= {
    meme:{
        message:'',
        fetched:false,
        meme_bounding_box:[],
        meme_id:9999,
        meme_url:'https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg',
        generated_meme_texts:["test Default"],
    },
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
                // console.log("ACTION.PAYLOAD: ", action.payload);
            return{
                ...state,
                meme: action.payload,
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