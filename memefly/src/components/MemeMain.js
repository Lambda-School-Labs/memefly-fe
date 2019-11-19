import React, { useState, useEffect, Context, useRef } from "react";
import axios from "axios";

const MemeMain = () => {
  const [search, setSearch] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [memeData, setMemeData] = useState("https://i.ibb.co/g911kmh/phone-meme.jpg");
  const [rankUrl, setRankUrl] = useState([]);
  const [memeText, setMemeText] = useState("");

    const canvas = useRef(null);

  // Places Text on image
  function imageOverlay() {
    console.log("Inside Image Overlay");

    console.log("current", canvas.current);

    const ctx = canvas.current.getContext("2d");

    ctx.fillStyle = "Red";
    ctx.strokeStyle = "Black";
    ctx.font = "100px Impact";
    ctx.fillText("Chicken", 50, 125);   
  }

  const max_width = "500px";
  function renderImage(src) {
    var image = new Image();

    // This Takes in the image and constrains it to a max width of 500px
    image.onload = function() {
      var canvas = document.getElementById("canvas");///
      if (image.width > max_width) {
        image.height *= max_width / image.height;
        image.width = max_width;
      }

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
      })
},[])

  const generateMeme = () => {
    let randomNumber = Math.floor(Math.random() * 104);
    console.log("ALL MEMES HERE", allMemes[randomNumber]);
    setMemeData(allMemes[randomNumber].url)
    setTimeout(imageOverlay, 500);

  };

    // axios(
    //   {
    //     url:
    //       "https://memefly.herokuapp.com/api/memes?query=%7B%0A%20getMemes%7B%0A%09name%0A%20%20box%0A%20%20url%0A%09%7D%0A%7D",
    //     method: "post",
    //     data: {
    //       query: `query getMemes{name box url}`
    //     }
    //   }
    // )
    //   .then((res) => {
    //     // Selects a Random Meme from Web BE and stores the data in memeData 
    //     let randomNumber = Math.floor(Math.random() * 104);
    //     setMemeData(res.data.data.getMemes[randomNumber]);
    //     console.log(memeData);
    //     //set state of image to generated true
        
      
        // return axios
        //   .post(
        //     "http://memeflydsapp-env.cjpgr2xwjn.us-west-2.elasticbeanstalk.com/generate-meme-text?meme_name=Y-U-No",
        //     {
        //       headers: {
        //         "Content-Type": "application/json",
        //         'Authorization': ''
        //       }
        //     }
        //   )
        //   .then(res => {
        //     // setMemeText()
        //     console.log("DS AXIOS: ", res);
        //   });

      // })
      // .catch(error => {
      //   console.log("error in axios call generate", error);
      // });

      // async function waitForText(){
      //   const data = await axios.get("https://memefly.herokuapp.com/api/memes?query=%7B%0A%20getMemes%7B%0A%09name%0A%20%20box%0A%20%20url%0A%09%7D%0A%7D")
      // }
  

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
  // rankUrl.map(item => {
  //   console.log(item.imageUrl);
  // });

  return (
    <div className="MainContainer">
      <div className="MemeContainer">
        <div id="imageGroup">
          <canvas
            ref={canvas}
            id="canvas"
            style={{ width: "500px", display: "hidden" }}

          >
            {renderImage(memeData)}{" "}

          </canvas>
        </div>

        <button onClick={generateMeme} id="mainGenerateButton" >GENERATE MEME</button>


      

        {/* <button > Add Text Box</button> */}

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
                <div key={item.imageID} className="trendingmemeDataContainer">
                  <img
                    src={item.imageUrl}
                    alt="trending"
                    className="trendingmemeData"
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
