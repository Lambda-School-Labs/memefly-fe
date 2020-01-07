import React, {useState, useEffect, useRef} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { uploadImageReducer } from '../store/reducers/memeReducer';
import {generateMeme, uploadImage, UPLOAD_IMAGE_START} from '../store/actions/actions'

export const SaveImg=(props)=>{
const [savedImg, setSavedImg] = useState("https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg");

    function saveMeme() {
        var preview = document.getElementsByClassName('lower-canvas'); //grab lower canvas by id 'd'
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
          // preview.src = URL.createObjectURL(file);
          setSavedImg(URL.createObjectURL(file));
          //include blob -> ex: blob:http://localhost:3002/215ed49c-5e30-408f-9da5-c047078ec3b2
          // const base64 = btoa(preview.src);
          // const decoded = atob(base64);
        }, false);

        if (file) {
          reader.readAsDataURL(file);
          console.log("entire uploaded file", file);
        }
        console.log(preview);
        window.open(preview)

      }


      useEffect(()=>{
    //   props.saveImage(savedImg); //need an action to save image to BE
      // console.log(props.uploadImage(previewURL))
      console.log("I'm HIT!", savedImg)
      },[savedImg]);

    // console.log("THIS NEEDS TO MATCH/UPDATE CURRENT STATE", previewURL)
    // let imageState = useSelector(state => state.memeReducer.meme.meme_url);
    // console.log("IMAGE CURRENT STATE", imageState)
    const imageState = savedImg

    return(
        <>

        <button onClick={saveMeme}>SAVE TEST</button>
        
{/* <input type="file" className="ButtonDesignOne" id="upload" onChange={previewFile}></input> */}
        </>
    );
}

const mapStateToProps = state => {
	return{
		meme_url: state.memeReducer.meme.meme_url,

	}
}

export default connect(mapStateToProps, {SaveImg, uploadImage}) (SaveImg);