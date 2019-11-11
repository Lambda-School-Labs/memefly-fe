import React, { useState, useEffect } from "react";
import axios from 'axios';

const MemeMain=()=>{
    const [search, setSearch]= useState("");
    const [memeURL, setMemeURL]= useState("https://i.ibb.co/g911kmh/phone-meme.jpg");

    const handleChange=(e)=>{
        setSearch(e.target.value);
        console.log("search", search);
        //{**TO DO**} Make sure this changes and is dynamically added to a search function
    }

    const generateMeme=()=>{
        axios
        // {**TO DO**}
        .get("url")
        .then(res =>{
        // {**TO DO**}
            setMemeURL(res.data.url);
            console.log(res)
        })
        .catch(error=>{
            console.log("error in axios call generate", error)
        })
    }

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
                </form>
            </div>
            <div className="trendingMeme">
                {/* {**TO DO** /Change Image Src} */}
                <img src="https://www.qdskill.com/views/template/10018/assets/images/users/avatar-3.jpg" className="trendingMemeUrl"></img>
                <img src="https://www.qdskill.com/views/template/10018/assets/images/users/avatar-3.jpg" className="trendingMemeUrl"></img>
                <img src="https://www.qdskill.com/views/template/10018/assets/images/users/avatar-3.jpg" className="trendingMemeUrl"></img>
                <img src="https://www.qdskill.com/views/template/10018/assets/images/users/avatar-3.jpg" className="trendingMemeUrl"></img>
                <img src="https://www.qdskill.com/views/template/10018/assets/images/users/avatar-3.jpg" className="trendingMemeUrl"></img>
            </div>

        </div>

    );

}

export default MemeMain;