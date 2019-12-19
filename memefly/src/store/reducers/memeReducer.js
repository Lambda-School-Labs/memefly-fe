import { GENERATE_MEME_START, GENERATE_MEME_SUCCESS, GENERATE_MEME_FAILURE, UPLOAD_IMAGE_START } from "../actions/actions"

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

export const uploadImageReducer = (state = initialState.meme.meme_url, action)=>{
    switch(action.type){
        case UPLOAD_IMAGE_START:
            return{
                payload: 
                function previewFile() {
                    var preview = document.getElementById('imagePreview');
                    var file    = document.querySelector('input[type=file]').files[0];
                    var reader  = new FileReader();
                  
                    reader.addEventListener("load", function () {
                      preview.src = reader.result;
                      console.log("base64?", preview.src)
                      // const base64 = btoa(preview.src);
                      // const decoded = atob(base64);
                    }, false);
            
                    if (file) {
                      reader.readAsDataURL(file);
                      console.log("url", preview.src)
                      console.log(file)
                    }
                  }
            
            }
            default:
                return state;
    }
}