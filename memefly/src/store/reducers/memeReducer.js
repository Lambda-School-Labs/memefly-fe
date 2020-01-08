import { GENERATE_MEME_START, GENERATE_MEME_SUCCESS, GENERATE_MEME_FAILURE, UPLOAD_IMAGE_START, UPLOAD_IMAGE_START_TEST1 } from "../actions/actions"

const initialState= {
    meme:{
        message:'',
        fetched:false,
        meme_bounding_box:[],
        meme_id:9999,
        meme_url:'',
        generated_meme_texts:["Click Generate Meme!"],
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
                console.log("ACTION.PAYLOAD: ", action.payload);
            return{
                ...state,
                meme: action.payload,
            }
        case UPLOAD_IMAGE_START:
            return Object.assign({},state,{ 
               ...state, meme: {...state.meme, 
                meme_url: action.payload, 
                meme_bounding_box: [],
                meme_id: Date.now(),
                message: "User Uploaded Image",

         }
            })
    
            
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

export const uploadImageReducer = (state = initialState.meme, action)=>{
    switch(action.type){
    case UPLOAD_IMAGE_START_TEST1:
            // console.log("in reducer ACTION.PAYLOAD: ", action.payload);
            // console.log("in reducer STATE", state)
            return{
            ...state, 
            meme_url: action.payload}
        
    default:
        return state;
 }
}