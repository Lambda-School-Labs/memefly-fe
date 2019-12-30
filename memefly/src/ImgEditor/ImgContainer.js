import React, {useEffect, useState, useRef} from "react";
import { fabric } from "fabric";
import Axios from 'axios';
import { connect } from "react-redux";
import ImgUpload from "../ImgUpload/ImgUpload.js"


function ImgContainer({meme_url, generated_meme_texts}) {

	const [imgSize, setImgSize] = useState({width:400, height:400});

	// DISPLAYS A RANDOM MESSAGE IF THERE IS MORE THAN 1 CHOICE.
	function randomMessage() {
		if(!generated_meme_texts.length){
			return generated_meme_texts;
		} else {
			return generated_meme_texts[Math.floor(Math.random() * generated_meme_texts.length)];	
		};
	}

	const textWidth = imgSize.width - 20;
	const middleOfImage = imgSize.width / 2;
	const canvasRef = useRef(null);

	// PROPERTIES FOR TEXT BOX.
	var text2 = new fabric.Textbox(randomMessage(), {
		cursorColor :"blue",
		top:16,
		// left:middleOfImage,
		width: textWidth,
		fontFamily:'impact',
		fill:'white',
	});

	console.log("memeURL", meme_url);	

	// function addText() {

	// 	testTextAdd = fabric.Canvas('d');

	// 	var newText = new fabric.Textbox(randomMessage(), {
	// 		cursorColor :"blue",
	// 		top:16,
	// 		// left:middleOfImage,
	// 		width: textWidth,
	// 		fontFamily:'impact',
	// 		fill:'white',
	// 	});

	// 	testTextAdd.add(newText);
	// }

	
	// CANVAS USE EFFECT
	useEffect(() => {
		let canvas;
		let tempImg;



		// Creates Canvas 
		canvas = new fabric.Canvas('d',{
			preserveObjectStacking:true,
		});
		
		
		
		// This loads the image
		tempImg = meme_url;
		let meme;
		let memeImg = new Image();
		const max_width = 500;
		
		
		memeImg.onload = function (img) {
			
			// Properties for Meme Image
			meme = new fabric.Image(memeImg, {
				angle: 0,
				left: 0,
				top: 0,
				selectable: false,
			});
			canvas.add(meme);

			// This is like z-index, this keeps the image behind the text
			canvas.moveTo(meme, 0);

			// Stores Image Dimensions in imgSize as object.
			setImgSize({
				width: memeImg.width.toString(),
				height: memeImg.height.toString()
			});

			// This Takes in the image and constrains it to a max width of 500px
			// if (memeImg.width > max_width) {
			// 	memeImg.height *= max_width / memeImg.height;
			// 	memeImg.width = max_width;
			//   }

			// Sets canvas size to size of image.
			canvas.setHeight(memeImg.height)
			canvas.setWidth(memeImg.width)
		};
		
		memeImg.src = tempImg


		canvas.add(text2);
		// console.log(memeImg)

		// Clears up canvas after each new meme is generated
		return function clean_up () {
			canvas.dispose();
		}

	},[meme_url])
return (
		<div>
			<canvas ref={canvasRef} id="d" className="CanvasC"></canvas>
		</div>
	);
}

const mapStateToProps = state => {
	return{
		meme_url: state.memeReducer.meme.meme_url,
		generated_meme_texts: state.memeReducer.meme.generated_meme_texts,

	}
}

export default connect(mapStateToProps, {ImgContainer}) (ImgContainer);
