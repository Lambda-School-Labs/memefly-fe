import React, {useState, useEffect} from 'react';
import { connect, useSelector } from 'react-redux'
import {uploadImage} from '../store/actions/actions'

export const ImgUpload=(props)=>{
const [previewURL, setPreviewURL] = useState("https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg");

    function previewFile() {
        var preview = document.getElementById('imagePreview');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();


        reader.addEventListener("load", function () {
          // preview.src = URL.createObjectURL(file);
          setPreviewURL(URL.createObjectURL(file));
          //include blob -> ex: blob:http://localhost:3002/215ed49c-5e30-408f-9da5-c047078ec3b2
          // const base64 = btoa(preview.src);
          // const decoded = atob(base64);
        }, false);

        if (file) {
          reader.readAsDataURL(file);
          console.log("entire uploaded file", file);
        }
      }


      useEffect(()=>{
      props.uploadImage(previewURL);
      // console.log(props.uploadImage(previewURL))
      },[previewURL]);

    // console.log("THIS NEEDS TO MATCH/UPDATE CURRENT STATE", previewURL)
    let imageState = useSelector(state => state.memeReducer.meme.meme_url);
    // console.log("IMAGE CURRENT STATE", imageState)
    imageState = previewURL

    return(
        <>
        
<input type="file" className="ButtonDesignOne" id="upload" onChange={previewFile}></input>
        </>
    );
}

const mapStateToProps = state => {
	return{
		meme_url: state.memeReducer.meme.meme_url,

	}
}

export default connect(mapStateToProps, {ImgUpload, uploadImage}) (ImgUpload);