import React from 'react';
import ImgContainer from './ImgContainer';
import DisplayTemplates from './DisplayTemplates';

function GenerateMemePage () {

    return (
            <div className="MainContainer">
              <div className="MemeContainer">
                <div id="imageGroup screen">
                    <ImgContainer />
                </div>
        
                <div className="ImageControlWrapper">
                  <button
                    onClick={console.log('generateMeme')}
                    class="ButtonDesignOne"
                    id="mainGenerateButton"
                  >
                    GENERATE MEME
                  </button>
                  <button
                    onClick={console.log('saveMeme')}
                    class="ButtonDesignOne"
                    id="SaveMemeButton"
                  >
                    SAVE MEME
                  </button>
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

export default GenerateMemePage;