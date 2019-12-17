import React, { useState } from 'react';
import { connect } from "react-redux"
import ImgContainer from './ImgContainer';
import DisplayTemplates from './DisplayTemplates';
import ImgUpload from "../ImgUpload/ImgUpload.js";

import {generateMeme} from '../store/actions/actions'


function GenerateMemePage (props) {
  const [meme, setMeme] = useState()

  const handleGenerateMeme = e => {
    console.log("Handled Generate meme")
    e.preventDefault();
   setMeme( props.generateMeme());
  }

    return (
            <div className="MainContainer">
              <div className="MemeContainer">
                <div id="imageGroup screen">
                    <ImgContainer />
                </div>
        
                <div className="ImageControlWrapper">
                  <button
                    onClick={handleGenerateMeme}
                    class="ButtonDesignOne"
                    id="mainGenerateButton"
                  >
                    GENERATE MEME
                  </button>
                  <button
                    class="ButtonDesignOne"
                    id="SaveMemeButton"
                  >
                    SAVE MEME
                  </button>
                  <ImgUpload>Upload Image</ImgUpload>

                </div>
                  <div class="fb-share-button" data-href="https://www.memeflyai.com" data-layout="button_count" data-size="small">
                      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.memeflyai.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
                </div>
        
                <>
                  <div className="trendingMeme">
                    <div className="templateMemeContainer">
                      <div className="MidPageNav">
                        <h2> Pick a Template!</h2>
                        <DisplayTemplates />
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          );
}

const mapStateToProps = state => {
  return{
    meme_id: state.memeReducer.meme_id,
    meme_url: state.memeReducer.meme_url,
    meme_text: state.memeReducer.meme_text,
    message: state.memeReducer.message
  }
}

export default connect(mapStateToProps,{ generateMeme }) (GenerateMemePage);