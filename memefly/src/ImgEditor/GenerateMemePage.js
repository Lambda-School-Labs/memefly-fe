import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ImgContainer from "./ImgContainer";
import ImgUpload from "../ImgUpload/ImgUpload.js";
import { generateMeme, uploadImage } from "../store/actions/actions";
import { SaveImg } from "../Save-Img/saveImg";
import * as FileSaver from "file-saver";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

function downloadImg() {
	const GrabCanvas = document.getElementById("d");
	// console.log(GrabCanvas);
	let test = GrabCanvas.toBlob(function(blob) {
		// console.log("blebl", blob)
		FileSaver.saveAs(blob, "myImg.png");
	});
}

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
	}
}));

function warning() {}

function GenerateMemePage(props) {
	// console.log(props.uploadedimageURL)
	const [meme, setMeme] = useState();
	// const memeURL = useSelector(state => state.memeReducer.meme.meme_url)
	// console.log(memeURL)
	const handleGenerateMeme = e => {
		// console.log("Handled Generate meme")
		e.preventDefault();
		setMeme(props.generateMeme());
	};

	useEffect(() => {
		if (props.meme_url === "") {
			props.generateMeme();
		}
	}, [props.meme_url]);

	return (
		<div className="MainContainer">
			<div className="MemeContainer">
				<div style={{padding:'2rem'}}> 
					<Alert severity="warning">
						<AlertTitle>Warning</AlertTitle>
						*THIS DATA WAS TRAINED ON DATA STRAIGHT FROM THE INTERNET, SOME MESSAGES
						MAY NOT BE SAFE FOR THOSE UNDER THE AGE OF 18.
						<br />
						*Content generated does not reflect the views, values, or morals of the
						creators. We tried to keep it clean...The internet is filthy.
					</Alert>
				</div>
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
						onClick={downloadImg}
					>
						SAVE MEME
					</button>

					<ImgUpload />
					<SaveImg></SaveImg>
				</div>
				<div
					className="fb-share-button"
					data-href="https://www.memeflyai.com"
					data-layout="button_count"
					data-size="small"
				>
					<a
						target="_blank"
						href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.memeflyai.com%2F&amp;src=sdkpreparse"
						className="fb-xfbml-parse-ignore"
					>
						Share
					</a>
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
	return {
		meme_data: state.memeReducer.meme,
		meme_url: state.memeReducer.meme.meme_url
	};
};

export default connect(mapStateToProps, { generateMeme, uploadImage })(
	GenerateMemePage
);
