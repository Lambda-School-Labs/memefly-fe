import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import ImgContainer from './ImgContainer';
import ImgUpload from "../ImgUpload/ImgUpload.js"
import {generateMeme, uploadImage} from '../store/actions/actions'
import { SaveImg } from '../Save-Img/saveImg';

function GenerateMemePage (props) {
  // console.log(props.uploadedimageURL)
  const [meme, setMeme] = useState()
  // const memeURL = useSelector(state => state.memeReducer.meme.meme_url)
  // console.log(memeURL)
  const handleGenerateMeme = e => {
    // console.log("Handled Generate meme")
    e.preventDefault();
   setMeme(props.generateMeme());
  }

  useEffect(() => {
    if(props.meme_url === '') {
      props.generateMeme();
    }
  }, [props.meme_url])


    return (
            <div className="MainContainer">
              <div className="MemeContainer">
                <div id="imageGroup screen">
                    <ImgContainer />
                </div>
        
                <div className="ImageControlWrapper">
                  <button
                    onClick={handleGenerateMeme}
                    className="ButtonDesignOne"
                    id="mainGenerateButton"
                  >
                    GENERATE MEME
                  </button>
                  <button
                    className="ButtonDesignOne"
                    id="SaveMemeButton"
                  >
                    SAVE MEME
                  </button>

              
                <ImgUpload/>
                <SaveImg></SaveImg>
                </div>
                  <div className="fb-share-button" data-href="https://www.memeflyai.com" data-layout="button_count" data-size="small">
                      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.memeflyai.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a>
                </div>
        
                {/* <>
                  <div className="trendingMeme">
                    <div className="templateMemeContainer">
                      <div className="MidPageNav">
                        <h2> Pick a Template!</h2>
                        <DisplayTemplates />
                      </div>
                    </div>
                  </div>
                </> */}
              </div>
            </div>
          );
}

const mapStateToProps = state => {
  return{
    meme_data: state.memeReducer.meme,
    meme_url: state.memeReducer.meme.meme_url
  }
}

export default connect(mapStateToProps,{ generateMeme, uploadImage }) (GenerateMemePage);