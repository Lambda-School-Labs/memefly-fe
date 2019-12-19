import React, {useState} from 'react';

const ImgUpload=()=>{
// const [previewURL, setPreviewURL] = useState("");
    function previewFile() {
        var preview = document.getElementById('imagePreview');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        var imgsrc = reader.result;
      
        reader.addEventListener("load", function () {
          preview.src = reader.result;
          // imgsrc = reader.result;
          console.log("base64?", preview.src)
          const base64 = btoa(preview.src);
          const decoded = atob(base64);
          // console.log("encoded? ", base64);
          // console.log("decoded?", decoded)
        }, false);

        console.log("local storage",localStorage.getItem("imageurl"))

        if (file) {
          reader.readAsDataURL(file);
          console.log("url", preview.src)
          console.log(file)
          window.localStorage.setItem("imageurl", preview.src);        
        }
      }


      //inside preview file we need to set the meme url to state so it will show on the screen, or send it to the be to save and have it displayed to the templates area.
    return(
        <>
    
        <input type="file" onChange={previewFile}/>
        <img src="" id="imagePreview" width="500" alt="Preview" visibility="hidden"></img>
        {/* we don't need this because it should be displayed in the fabric canvas */}
        </>
    );
}

export default ImgUpload;