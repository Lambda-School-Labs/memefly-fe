import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Meme } from "../ImgEditor/Meme";
import ImgUpload from "../ImgUpload/ImgUpload";
import { fabric } from "fabric";

const MemeMain = () => {
  const [search, setSearch] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [memeData, setMemeData] = useState({
    name: "batman-slapping-robin",
    url: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg"
  });
  const [rankUrl, setRankUrl] = useState([]);
  const [memeText, setMemeText] = useState("");
  const [fontSize, setFontSize] = useState(45);
  const [naturalWidth, setNaturalWidth] = useState(0);

  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

//FB Login Auth Below
//Check FBloginNotes.txt

// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }
//FB Login Auth Above

  const canvas = useRef(null);

  // Places Text on image
  function imageOverlay() {
    // console.log("Inside Image Overlay");
    // console.log(memeData);
    const ctx = canvas.current.getContext("2d");

    var textWidth = ctx.measureText(memeData.name).width; //change dynamically
    // console.log(textWidth);
    ctx.font = "40px Impact";
    ////The function below breaks text at blank spaces to wrap on the canvas
    var topText = [
      "I ate a clock yesterday, it was very time-consuming.",
      "A perfectionist walked into a bar…apparently, the bar wasn’t set high enough.",
      "DOGS>CATS",
      "BOTTOM TEXT SUCKS",
      "LOLZ ",
      "DATA SCIENCE SMELLS LIKE SUCCESS",
      "MEMEFLY OAIHFOAIHF",
      "IM OUT OF IDEAS",
      "PLEASE DONT CRASH"
    ];
    var bottomText = [
      "CAN YOU SEE ME NOW?",
      "WE LOVE LAMBDA SCHOOL",
      "I’m a big fan of whiteboards. I find them quite re-markable.",
      "IT'S ALMOST 2020",
      "NO ONE EVEN LIKES TOP TEXT",
      "I LIKE VERY LITTLE COFFEE IN MY CREAM",
      "HOT TODDY ANYONE?",
      "MEMES ARE COOL",
      "VINI VINI VICHII"
    ];
    // memeData.name;
    // console.log("Top Text:", topText);

    printAtWordWrap(
      ctx,
      topText[Math.floor(Math.random() * topText.length)],
      50,
      60,
      40,
      Math.min(400, naturalWidth)
    ); //fit to whichever is smaller, 400 or natural width
    printAtWordWrap(
      ctx,
      bottomText[Math.floor(Math.random() * bottomText.length)],
      50,
      360,
      40,
      Math.min(400, naturalWidth)
    ); //fit to whichever is smaller, 400 or natural width

    function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      fitWidth = fitWidth || 0;

      if (fitWidth <= 0) {
        context.fillText(text, x, y);
        // context.strokeText( text, x, y );

        return;
      }
      var words = text.split(" ");
      var currentLine = 0;
      var idx = 1;
      while (words.length > 0 && idx <= words.length) {
        var str = words.slice(0, idx).join(" ");
        var w = context.measureText(str).width;
        if (w > fitWidth) {
          if (idx == 1) {
            idx = 2;
          }
          context.fillText(
            words.slice(0, idx - 1).join(" "),
            x,
            y + lineHeight * currentLine
          );
          context.strokeText(
            words.slice(0, idx - 1).join(" "),
            x,
            y + lineHeight * currentLine
          );

          currentLine++;
          words = words.splice(idx - 1);
          idx = 1;
          context.strokeText(
            words.slice(0, idx - 1).join(" "),
            x,
            y + lineHeight * currentLine
          );
        } else {
          idx++;
        }
      }
      if (idx > 0)
        context.fillText(words.join(" "), x, y + lineHeight * currentLine);
      context.strokeText(words.join(" "), x, y + lineHeight * currentLine);
    }
    ////END of function that wraps canvas.

    // console.log(
    //   "%c memeData: ",
    //   "background: #222; color: #bada55",
    //   memeData.name
    // );
  } //End of Image Overlay
  const max_width = "650px";
  function renderImage(src) {
    var image = new Image();

    // This Takes in the image and constrains it to a max width of 500px
    image.onload = function() {
      var canvas = document.getElementById("canvas"); ///
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
    // console.log("search", search);
    //{**TO DO**} Make sure this changes and is dynamically added to a search function
  };

  const searchIncludes = search => {
    axios
      .get("URL 'INCLUDES' ENDPOINT FOR SEARCH FUNCTION"`${search}`)
      .then(response => {
        setMemeData(response.data.url);
        // console.log(response);
      })
      .catch(error => {
        // console.log("error in search function", error);
      });
  };

  //on click set search to value, use includes endpoint to return meme that includes search term in the title/tag and set returned meme ur to setMemeData to display in main meme page

  useEffect(() => {
    //This loads all of the memes into state
    axios({
      url:
        "http://memefly.herokuapp.com/api/memes/base",
      method: "post",
      data: {
        query: `query getMemes{name box url}`
      }
    }).then(res => {
      // console.log(res.data.data.getMemes[0].url);
      setAllMemes(res.data.data.getMemes);
      setTemplates(res.data.data.getMemes);
    });
  }, []);

  const generateMeme = () => {
    let randomNumber = Math.floor(Math.random() * 104);
    // console.log("ALL MEMES HERE", allMemes[randomNumber]);
    setMemeData(allMemes[randomNumber]);
    // console.log("MEME NAME HERE: ", memeData.name.toLowerCase());

    axios
      .post(
        `http://memeflydsapp-env.cjpgr2xwjn.us-west-2.elasticbeanstalk.com/generate-meme-text?meme_name=${memeData.name.toLowerCase()}`
      )
      .then(res => {
        // console.log("Meme text Axios Response", res.data.meme_text);
        setMemeText(res.data.meme_text);
      })
      .catch(err => console.log(err));
    setTimeout(imageOverlay, 150);
  };
  const saveMeme = function() {
    console.log("Sleepy");
    window.open(document.querySelector("screen"));
  };


  
  var test = new fabric.Canvas('c',{
    backgroundImage:memeData.url,
  });

  var text = new fabric.Text(memeData.name, { left: 0, top: 0 , fontFamily:'Impact'});

  test.add(text);

  return (
    <div className="MainContainer">
      <div className="MemeContainer">
        <div id="imageGroup screen">
          <canvas id="c" className="CanvasC" width="500"></canvas>
        </div>

        <div className="ImageControlWrapper">
          <button
            onClick={generateMeme}
            className="ButtonDesignOne"
            id="mainGenerateButton"
          >
            GENERATE MEME
          </button>
          <button
            onClick={saveMeme}
            className="ButtonDesignOne"
            id="SaveMemeButton"
          >
            SAVE MEME
          </button>
        </div>
          <div class="fb-share-button" data-href="https://www.memeflyai.com" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.memeflyai.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>

        <>
          <div className="trendingMeme">
            <div className="templateMemeContainer">
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
                          // setTimeout(imageOverlay, 500);
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
};

export default MemeMain;
