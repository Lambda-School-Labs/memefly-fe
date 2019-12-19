import React, {useEffect, useState, useRef} from "react";
import { fabric } from "fabric";
import Axios from 'axios';
import { connect } from "react-redux";
import ImgUpload from "../ImgUpload/ImgUpload.js"


function ImgContainer({meme_url, generated_meme_texts}) {

	const [defaultImg, setDefaultImg] = useState({meme_url});

	const [imgSize, setImgSize] = useState({})
	const [innerText, setText] = useState('');

	function randomMessage() {

		if(!generated_meme_texts.length){
			return generated_meme_texts;
		} else {
			return generated_meme_texts[Math.floor(Math.random() * generated_meme_texts.length)];	
		};
	}
	const canvasRef = useRef(null);

	var text2 = new fabric.Textbox(randomMessage(), {
		cursorColor :"blue",
		top:16,
		left:3,
		fontFamily:'impact',
		fill:'white',
	});

	// console.log(meme_url);	
	
	useEffect(() => {
		if(canvas){
			canvas.dispose();
		}
		
		// let tempImg;
		
		// Creates Canvas 
		let canvas = new fabric.Canvas('d',{
			preserveObjectStacking:true,
			maxWidth: 500,
		});
		
		
		
		// This loads the image

		let tempImg = meme_url;
		// console.log('tempimg: ', tempImg);
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
			// console.log("memeImg.height:", memeImg.height);
			// console.log(" memeImg.width: ", memeImg.width);

			// This Takes in the image and constrains it to a max width of 500px
			// if (memeImg.width > max_width) {
			// 	memeImg.height *= max_width / memeImg.height;
			// 	memeImg.width = max_width;
			//   }

			// Sets canvas size to size of image.
			canvas.setHeight(memeImg.height)
			canvas.setWidth(memeImg.width)
		};

		memeImg.src = tempImg;


		canvas.add(text2);
	},[meme_url])

	// useEffect(()=>{
	// 	let canvas = new fabric.Canvas('d',{
	// 		preserveObjectStacking:true
	// 	});
	// 	// console.log(canvas, innerText)
	// 	canvas.text = innerText
	// }, [innerText])



	return (
		<div>
			<canvas ref={canvasRef} id="d" className="CanvasC"></canvas>
			{/* <button onClick={() => setText('nothing here')}>Add some text!!!</button> */}
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
