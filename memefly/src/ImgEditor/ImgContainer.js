import React, {useEffect, useState, useRef} from "react";
import { fabric } from "fabric";
import Axios from 'axios';

function ImgContainer() {
	const [memeData, setMemeData] = useState({
		meme_url:'https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg'
	});
	const [imgSize, setImgSize] = useState({})
	const [innerText, setText] = useState('');
	const canvasRef = useRef(null);

	function axiosConfig(query) {
		return {
			url: "http://memefly.herokuapp.com/api/memes/base",
			method: "POST",
			data: {
				query
			}
		};
	}

	function getBaseMeme(id, rand = false) {
	return `
	query{
	getBaseMeme(id:${id}, rand:${rand}){
		message
		fetched
		meme_bounding_box
		meme_id
		meme_url
		meme_text
	}
	}
	`;
	}

	useEffect(() => {
	Axios(axiosConfig(getBaseMeme(null, true)))
	.then(res => {
		// console.log(res.data.data.getBaseMeme);
		// setMemeData(res.data.data.getBaseMeme);
	})

	}, [])


	var text2 = new fabric.Textbox('Hello', {
		cursorColor :"blue",
		top:16,
		left:3,
		fontFamily:'impact',
	});

	var text = new fabric.Textbox('world', {
		cursorColor :"blue",
		top:5,
		left:272,
		fontFamily:'impact',
	});

	useEffect(() => {

		// Creates Canvas 
		let canvas = new fabric.Canvas('d',{
			preserveObjectStacking:true
		});
		
		// This loads the image
		let tempImg = memeData.meme_url;
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

		function addText(){
			canvas.add(text);
		}

		addText();
		canvas.add(text2);


	},[])

	useEffect(()=>{
		let canvas = new fabric.Canvas('d',{
			preserveObjectStacking:true
		});
		console.log(canvas, innerText)
		canvas.text = innerText
	}, [innerText])

	


	return (
		<div>
			<canvas ref={canvasRef} id="d" className="CanvasC"></canvas>
			{/* <button onClick={() => setText('nothing here')}>Add some text!!!</button> */}
		</div>
	);
}

export default ImgContainer;
