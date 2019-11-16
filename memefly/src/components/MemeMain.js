import React, { useState, useEffect } from "react";
import axios from "axios";

const MemeMain = () => {
  const [search, setSearch] = useState("");
  const [memeURL, setMemeURL] = useState(
    "https://i.ibb.co/g911kmh/phone-meme.jpg"
  );
  const [rankUrl, setRankUrl] = useState([]);

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
            <img src={memeURL} className="mainmeme" />
            <button onClick={generateMeme} id="mainGenerateButton">
            GENERATE MEME
            </button>

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
