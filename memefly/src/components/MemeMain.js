import React, { useState, useEffect, Context } from "react";
import axios from "axios";

const MemeMain = () => {
  const [search, setSearch] = useState("");
  const [memeURL, setMemeURL] = useState(
    "https://i.ibb.co/g911kmh/phone-meme.jpg"
  );
  const [rankUrl, setRankUrl] = useState([]);
  const [memeText, setMemeText] = useState("");


  // Returns Natural Dimensions of called Image 
  const [dimension, setDimension] = useState();

  function getDimensions(url){   
    var img = new Image();
    img.addEventListener("load", function(){
        console.log( 'width: ' + this.width + 'px' +' '+  'height: ' +  this.height + 'px' );
        // setDimension(width: this.n)
    });
    img.src = url;
  }

  console.log("Image Dimensions", getDimensions(memeURL));

// *************************************************** TEST AREA

  // Places Text on image
  function imageOverlay() {
    console.log('here i ammmm');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    // const image = new Image();
    // image.src = memeURL;
    // image.onload = () => {
    //   context.drawImage(image, 0, 0, canvas.width, canvas.height);
    // };
    ctx.fillStyle = "Red";
    ctx.strokeStyle = "Black";
    ctx.font = "100px Impact";
    ctx.fillText(memeURL.length, 500 , 125);
  }


  // Renders incoming image to 500px and makes a canvas the same size
  const max_width = '500px';

  function renderImage(src){
    var image = new Image();
    image.onload = function(){
      var canvas = document.getElementById('canvas');
      if (image.width > max_width) {
        image.height *= max_width / image.height;
        image.width = max_width;
      }

      let ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width, canvas.height);
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image,0,0,image.width,image.height);
    };
    image.src = src;
    
  }

// *************************************************** TEST AREA

  const handleChange = e => {
    setSearch(e.target.value);
    console.log("search", search);
    //{**TO DO**} Make sure this changes and is dynamically added to a search function
  };
  
  const searchIncludes = search => {
    axios
      .get("URL 'INCLUDES' ENDPOINT FOR SEARCH FUNCTION"`${search}`)
      .then(response => {
        setMemeURL(response.data.url);

        console.log(response);
      })
      .catch(error => {
        console.log("error in search function", error);
      });
  };

  //on click set search to value, use includes endpoint to return meme that includes search term in the title/tag and set returned meme ur to setMemeUrl to display in main meme page

  const generateMeme = () => {
    axios
      // {**TO DO**}
      .get(
        "http://version1.api.memegenerator.net//Generators_Select_ByNew?pageIndex=0&pageSize=12&apiKey=demo"
      )
      .then(res => {
        // {**TO DO**}
        let randomNumber = Math.floor(Math.random() * 11);
        setMemeURL(res.data.result[randomNumber].imageUrl);
        console.log(res.data.result[randomNumber].imageUrl);
      })
      // .post('http://memeflydsapp-env.cjpgr2xwjn.us-west-2.elasticbeanstalk.com/generate-meme-text?meme_name=Y-U-No' )
      // .then(res => {
      //   // setMemeText()
      //   console.log("DS AXIOS: ", res)
      // })
      .catch(error => {
        console.log("error in axios call generate", error);
      });
  };

  //THIS CAN BE USED ONCE WE GET A RANKING SYSTEM IN PLACE
  useEffect(() => {
    axios
      .get(
        "http://version1.api.memegenerator.net//Generators_Select_ByNew?pageIndex=0&pageSize=12&apiKey=demo"
      )
      .then(res => {
        console.log(res.data.result);
        setRankUrl(res.data.result);
      })
      .catch(error => {
        console.log("error in top5", error);
      });
  }, []);


  // For each item in the res, check to see if the count is <= 5, if so render an img with src of res.data.url
  ////////////////////////////////////////////////////////
  rankUrl.map(item => {
    console.log(item.imageUrl);
  });

  return (
    <div className="MainContainer">
        <div className="MemeContainer">

          <div id="imageGroup" >
            <canvas id='canvas' style={{width: '500px', display:'hidden'}} onClick={() => imageOverlay()}>
              {renderImage(memeURL)}  </canvas>
              {/* <img src={memeURL} className="mainmeme" id='memeImage' style={{maxWidth:'500px'}} /> */}

          </div>

            <button onClick={generateMeme} id="mainGenerateButton">
            GENERATE MEME
            </button>

            <button > Add Text Box</button>

            <div className="trendingMeme">
                {/* {**TO DO** HERE IS WHERE WE WILL MAP THE TOP 5 RANKINGS} */}
                <div className="trendingMemeContainer">
            <div className="MidPageNav">
            <h4>Trending Images</h4>
            <form>
                <input
                type="text"
                className="SearchField"
                placeholder="Search"
                value={search}
                onChange={handleChange}
                />
                <button onSubmit={searchIncludes}>SEARCH</button>
            </form>
            </div>

                    {rankUrl.slice(0, 5).map(item => {
                    return (
                        <div key={item.imageID} className="trendingMemeUrlContainer">
                        <img
                            src={item.imageUrl}
                            alt="trending"
                            className="trendingMemeUrl"
                        />
                        <h4>{item.displayName}</h4>
                        <h4>Total Votes: {item.entityVotesSummary.totalVotesSum}</h4>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    </div>
  );
};
export default MemeMain;
