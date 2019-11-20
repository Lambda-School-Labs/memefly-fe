import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Meme } from './Meme';


const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

function ImgContainer() {

    const [templates, setTemplates] = useState([]);
    const [template, setTemplate] = useState(null);
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [meme, setMeme] = useState(null);


    useEffect(() => {
        Axios
        .get('https://api.imgflip.com/get_memes')
        .then(res => {
            console.log("MEMEFLIP RESPONSE", res.data.data.memes)
            setTemplates(res.data.data.memes);
        })
        .catch(err => console.log(err))
    },[])

    if(meme) {
        return (<div>
            <img src={meme} alt="custom meme" style={{ textAlign: "center" }} />
        </div>)
    }

    return (
      <div style={{ textAlign: "center" }}>
        {template && (
        <form
        onSubmit={async e => {
          e.preventDefault();
          // add logic to create meme from api
          const params = {
            template_id: template.id,
            text0: topText,
            text1: bottomText,
            username: "xzk03017",
            password: "xzk03017@cndps.com"
          };
          const response = await fetch(
            `https://api.imgflip.com/caption_image${objectToQueryParam(
              params
            )}`
          );
          const json = await response.json();
          setMeme( json.data.url);
        }}
      > 
            <Meme template={template} />
            <input 
            placeholder="Top Text" 
            value={topText} 
            onChange={ e => setTopText(e.target.value)}
            />
            <input             
            placeholder="Bottom Text" 
            value={bottomText} 
            onChange={ e => setBottomText(e.target.value)}/>
            <button type="submit">Create Meme</button>

        </form>    
        )}
        {!template && (
          <>
            <h2>Pick a Template</h2>
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

export default ImgContainer;