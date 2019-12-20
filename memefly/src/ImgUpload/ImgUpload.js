import React, {useState} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { uploadImageReducer } from '../store/reducers/memeReducer';
import {generateMeme, uploadImage, UPLOAD_IMAGE_START} from '../store/actions/actions'

export const ImgUpload=()=>{
const [previewURL, setPreviewURL] = useState("");
const dispatch = useDispatch;
var preview = document.getElementById('imagePreview');

    function previewFile() {
        var preview = document.getElementById('imagePreview');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();


        reader.addEventListener("load", function () {
          preview.src = URL.createObjectURL(file);
          setPreviewURL(URL.createObjectURL(file));
          //include blob -> ex: blob:http://localhost:3002/215ed49c-5e30-408f-9da5-c047078ec3b2
          // const base64 = btoa(preview.src);
          // const decoded = atob(base64);
        }, false);

        if (file) {
          reader.readAsDataURL(file);
          console.log("entire uploaded file", file)
        }
      }

    console.log("THIS NEEDS TO MATCH/UPDATE CURRENT STATE", previewURL)
    let imageState = useSelector(state => state.memeReducer.meme.meme_url);
    useDispatch({type: UPLOAD_IMAGE_START, payload: previewURL}, console.log("INSIDE THE DISPATCH"))
    console.log("IMAGE CURRENT STATE", imageState)
    imageState = previewURL

    return(
        <>
        <button></button><input type="file" onChange={previewFile}/>
        <img src="" id="imagePreview" width="500" alt="Preview" visibility="hidden"/>
        </>
    );
}

const mapStateToProps = state => {
	return{
		meme_url: state.memeReducer.meme.meme_url,

	}
}

export default connect(mapStateToProps, {ImgUpload}) (ImgUpload);