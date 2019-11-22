import React, { useState, useEffect, Context, useRef } from "react";
import axios from "axios";
import DisplayTemplates from "../ImgEditor/DisplayTemplates";
import {Meme} from "../ImgEditor/Meme";
import html2canvas from 'html2canvas';

const MemeMain = () => {
  const [search, setSearch] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [memeData, setMemeData] = useState({
    name: "", 
    url: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg"});
  const [rankUrl, setRankUrl] = useState([]);
  const [memeText, setMemeText] = useState("");
  const [fontSize, setFontSize] = useState(45);
  const [ naturalWidth, setNaturalWidth] = useState(0);

  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

    const canvas = useRef(null);

  // Places Text on image
    function imageOverlay() {
      console.log("Inside Image Overlay");
      console.log(memeData);
      const ctx = canvas.current.getContext("2d");

      var textWidth = ctx.measureText(memeData.name).width; //change dynamically
      console.log(textWidth);
      ctx.font = "40px Impact";
      ////The function below breaks text at blank spaces to wrap on the canvas
      var topText = "THIS IS THE TOP TEXT. IS THIS TEXT LONG ENOUGH TO TEST?"
      var bottomText = "THIS IS THE BOTTOM TEXT"
      // memeData.name;
      console.log("txt:", topText)

      printAtWordWrap(ctx, topText, 50, 60, 40, (Math.min(400, naturalWidth)) ); //fit to whichever is smaller, 400 or natural width
      printAtWordWrap(ctx, bottomText, 50, 360, 40, (Math.min(400, naturalWidth)) ); //fit to whichever is smaller, 400 or natural width

    function printAtWordWrap( context , text, x, y, lineHeight, fitWidth)
      {
         ctx.fillStyle = "#ffffff";
         ctx.strokeStyle = "#000000";
         ctx.lineWidth=2;
         fitWidth = fitWidth || 0;
    
          if (fitWidth <= 0)
            {        
              context.fillText( text, x, y );
              // context.strokeText( text, x, y );

              return;
            }
            var words = text.split(' ');
            var currentLine = 0;
            var idx = 1;
            while (words.length > 0 && idx <= words.length)
          {
            var str = words.slice(0,idx).join(' ');
            var w = context.measureText(str).width;
            if ( w > fitWidth )
            {
                if (idx==1)
                {
                    idx=2;
                }
                context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
                context.strokeText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );

                currentLine++;
                words = words.splice(idx-1);
                idx = 1;
                context.strokeText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );

            }
              else
              {idx++;}
           }
          if  (idx > 0)
    context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
    context.strokeText( words.join(' '), x, y + (lineHeight*currentLine) );
  }
      ////END of function that wraps canvas.

      console.log("%c memeData: ", 'background: #222; color: #bada55', memeData.name) 
     
   }//End of Image Overlay 
    var image = new Image();
    const  max_width = '500px';
    function renderImage(src) {
      var image = new Image();
  
      // This Takes in the image and constrains it to a max width of 500px
      image.onload = function() {
        var canvas = document.getElementById("canvas");///
        if (image.width > max_width) {
          image.height *= max_width / image.height;
          image.width = max_width;
        }
        setNaturalWidth(image.width); //this is to prevent font stretching

      // This makes a canvas on top of the image that matches the width and height of the image 
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
      };
      image.src = src;
    }

  const handleChange = e => {
    setSearch(e.target.value);
    console.log("search", search);
    //{**TO DO**} Make sure this changes and is dynamically added to a search function
  };

  const searchIncludes = search => {
    axios
      .get("URL 'INCLUDES' ENDPOINT FOR SEARCH FUNCTION"`${search}`)
      .then(response => {
        setMemeData(response.data.url);
        console.log(response);
      })
      .catch(error => {
        console.log("error in search function", error);
      });
  };

  //on click set search to value, use includes endpoint to return meme that includes search term in the title/tag and set returned meme ur to setMemeData to display in main meme page

  useEffect(()=>{
    //This loads all of the memes into state
    axios(
      {
        url:
          "https://memefly.herokuapp.com/api/memes?query=%7B%0A%20getMemes%7B%0A%09name%0A%20%20box%0A%20%20url%0A%09%7D%0A%7D",
        method: "post",
        data: {
          query: `query getMemes{name box url}`
        }
      }
    )
      .then((res) => {
        console.log(res.data.data.getMemes[0].url)
        setAllMemes(res.data.data.getMemes)
        setTemplates(res.data.data.getMemes);
      })
},[])
 
  const generateMeme = () => {
    let randomNumber = Math.floor(Math.random() * 104);
    console.log("ALL MEMES HERE", allMemes[randomNumber]);
    setMemeData(allMemes[randomNumber])
    setTimeout(imageOverlay, 500);
  };
  const saveMeme = function() {
    console.log("Sleepy");
    window.open(document.querySelector("screen"));
}



  return (
    <div className="MainContainer">
      <div className="MemeContainer">
        <div id="imageGroup screen">
          {/* Place Div here  and incoming Text from DS  */}
          {/* Div Props will have variety of pointer events:  */}
          <canvas
            ref={canvas}
            id="canvas"
            className="cnvs"
            style={{ width: "500px", display: "hidden" }}
          >
            {renderImage(memeData.url)}{" "}
          </canvas>
        </div>

        <div className="ImageControlWrapper">
        <button onClick={generateMeme} class="ButtonDesignOne" id="mainGenerateButton">
          GENERATE MEME
        </button>
        <button onClick={saveMeme} class="ButtonDesignOne"  id="SaveMemeButton">
          SAVE MEME
        </button>
        </div>

        <>
          <div className="trendingMeme">
            <div
              className="templateMemeContainer"
              
              >
              <div className="MidPageNav">
                <h2> Pick a Template!</h2>
              </div>
              
              <div className="templateMemeGroup">
                {templates.map(template => {
                  return (
                    <>
                    <Meme
                      template={template}
                      onClick={() => {
                        setMemeData(template);
                        setTimeout(imageOverlay, 500);
                      }}
                    />
                    </>
                  );
                })}
              </div>
              
            </div>
          </div>
        </>
      </div>
    </div>
  );
  }

 export default MemeMain;