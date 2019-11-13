import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchModal from "./SearchModal";

const MemeMain=()=>{
    const [search, setSearch]= useState("");
    const [searchList, setSearchList]= useState([]);
    const [memeURL, setMemeURL]= useState("https://i.ibb.co/g911kmh/phone-meme.jpg");
    const [rankUrl, setRankUrl] = useState([]);
//MODAL//



//MODAL END//
    const handleChange=(e)=>{
        setSearch(e.target.value);
    }

  
    const searchIncludes = (e) =>{
        e.preventDefault();                
        axios
        .get("http://version1.api.memegenerator.net//Generators_Select_ByNew?pageIndex=0&pageSize=12&apiKey=demo")
        .then(response =>{
            console.log("this is in the search function", response);                
            let array = [];

            response.data.result.map(meme=>{
                if(meme.displayName.toLowerCase().includes(search.toLowerCase())){
                    array.push(meme.imageUrl);
                };
                setSearchList(array);
            })                
        })
        .catch(error=>{
            console.log("error in search function", error)
        })
        console.log("search list", searchList)
    }

    //on click set search to value, use includes endpoint to return meme that includes search term in the title/tag and set returned meme ur to setMemeUrl to display in main meme page

    const generateMeme=()=>{
        axios
        // {**TO DO**}
        .get("http://version1.api.memegenerator.net//Generators_Select_ByNew?pageIndex=0&pageSize=12&apiKey=demo")
        .then(res =>{
        // {**TO DO**}
        let randomNumber= Math.floor(Math.random() * 11)
            setMemeURL(res.data.result[randomNumber].imageUrl);
            console.log(res.data.result[randomNumber].imageUrl);
        })
        .catch(error=>{
            console.log("error in axios call generate", error)
        })
    }

    useEffect(()=>{
        axios
            .get("http://version1.api.memegenerator.net//Generators_Select_ByNew?pageIndex=0&pageSize=12&apiKey=demo")
            .then(res => {
                setRankUrl(res.data.result);
            }).catch(error => {
                console.log("error in top5", error)
            })
        },[]);    

    return(
        <div className="MainContainer">
            <div className="MemeContainer">
                <img src={memeURL} className="mainmeme" />
                <button onClick={generateMeme} id="mainGenerateButton">GENERATE MEME</button>
            </div>
            <div className="MidPageNav">
                <h4>Trending Images</h4>
                <form>
                    <input type="text" className="SearchField" placeholder="Search" value={search} onChange={handleChange} />
                    <button onClick={searchIncludes} id="searchButton" >SEARCH</button>
                </form>
                <SearchModal />
            </div>

            <div className="trendingMeme">
                <div className="trendingMemeContainer">
                    {/* THIS DOES NOT RETURN AN ACURATE TOP 5, THIS JUST RETURNS THE FIRST 5. PENDING SORT FUNCTION */}
                {rankUrl.slice(0,8).map(item=>{
                    return(
                        <div key={item.imageID} className="trendingMemeUrlContainer">
                            <img src={item.imageUrl} alt="trending" className="trendingMemeUrl" />
                            <h4>{item.displayName}</h4>
                            <h4>Total Votes: {item.entityVotesSummary.totalVotesSum}</h4>

                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    );
}
export default MemeMain;