import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Meme} from "./Meme";

function DisplayTemplates() {

    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null);
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [meme, setMeme] = useState(null);


    useEffect(() => {
        Axios(
          {
            url:
              "https://memefly.herokuapp.com/api/memes?query=%7B%0A%20getMemes%7B%0A%09name%0A%20%20box%0A%20%20url%0A%09%7D%0A%7D",
            method: "post",
            data: {
              query: `query getMemes{name box url}`
            }
          }
        )
        .then(res => {
            console.log("MEMEFLIP RESPONSE", res.data.data.getMemes)
            setTemplates(res.data.data.getMemes);
        })
        .catch(err => console.log(err))
    },[])

    return (
      <div style={{ textAlign: "center" }}>
        {!template && (
          <>
            {templates.map(template => {
              return (
                <Meme
                  template={template}
                  onClick={() => {
                    setTemplate(template);
                  }}
                />
              );
            })}
          </>
        )}
      </div>
    );
};

export default DisplayTemplates;