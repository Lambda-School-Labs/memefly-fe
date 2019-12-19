import React from 'react';
import { useSelector } from 'react-redux'

const ImgUpload=()=>{
// const [previewURL, setPreviewURL] = useState("");

const memeURL = useSelector(state=> state.uploadImageReducer)
console.log(memeURL)
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

      //inside preview file we need to set the meme url to state so it will show on the screen, or send it to the be to save and have it displayed to the templates area.
    return(
        <>
    
        <input type="file" onChange={previewFile}/>
        <img src="" id="imagePreview" width="500" alt="Preview" visibility="hidden" />
        </>
    );
}

export default ImgUpload;