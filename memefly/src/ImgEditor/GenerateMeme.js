import React, { useState} from 'react';
import axios from 'axios';

function GenerateMeme() {
    const [allMemes, setAllMemes] = useState([]);
	const [memeData, setMemeData] = useState({
		name: "batman-slapping-robin",
		url: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg"
	});
	const [memeText, setMemeText] = useState("");

    let randomNumber = Math.floor(Math.random() * 104);
    console.log("ALL MEMES HERE", allMemes[randomNumber]);
    setMemeData(allMemes[randomNumber]);
    console.log("MEME NAME HERE: ", memeData.name.toLowerCase());

    axios
        .post(
            `http://memeflydsapp-env.cjpgr2xwjn.us-west-2.elasticbeanstalk.com/generate-meme-text?meme_name=${memeData.name.toLowerCase()}`
        )
        .then(res => {
            console.log("Meme text Axios Response", res.data.meme_text);
            setMemeText(res.data.meme_text);
        })
        .catch(err => console.log(err));
};

export default GenerateMeme;