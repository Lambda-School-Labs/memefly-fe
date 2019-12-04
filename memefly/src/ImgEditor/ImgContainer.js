import React, { useEffect, useState } from "react";
import axios from "axios";
import { Meme } from "./Meme";
import { fabric } from "fabric";
import GenerateMeme from "./GenerateMeme";

function ImgContainer() {
	const [templates, setTemplates] = useState([]);
	const [allMemes, setAllMemes] = useState([]);
	const [memeData, setMemeData] = useState({
		name: "batman-slapping-robin",
		url: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg"
	});
	const [memeText, setMemeText] = useState("");


	const saveMeme = function() {
		console.log("Sleepy");
		window.open(document.querySelector("screen"));
  };
  
  var test = new fabric.Canvas('c', {
    backgroundImage: memeData.url,
  });

  var text = new fabric.Text(memeData.name, { left: 0, top: 0 , fontFamily:'Impact'});

  test.add(text);

	return (
		<div className="MainContainer">
			<div className="MemeContainer">
				<div id="imageGroup screen">
          <canvas id="c" ></canvas>
        </div>

				<div className="ImageControlWrapper">
					<button
						onClick={<GenerateMeme/>}
						class="ButtonDesignOne"
						id="mainGenerateButton"
					>
						GENERATE MEME
					</button>
					<button onClick={saveMeme} class="ButtonDesignOne" id="SaveMemeButton">
						SAVE MEME
					</button>
					<div class="fb-share-button" data-href="https://www.memeflyai.com" data-layout="button_count" data-size="small" >
						<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.memeflyai.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" >
							Share
						</a>
					</div>
				</div>

				<>
					<div className="trendingMeme">
						<div className="templateMemeContainer">
							<div className="MidPageNav">
								<h2> Pick a Template!</h2>
							</div>

							<div className="templateMemeGroup">
								{templates.map(template => {
									return (
										<>
											<Meme
												template={template}
												onClick={() => {
													setMemeData(template);
													// setTimeout(imageOverlay, 500);
												}}
											/>
										</>
									);
								})}
							</div>
						</div>
					</div>
				</>
			</div>
		</div>
	);
}

export default ImgContainer;
