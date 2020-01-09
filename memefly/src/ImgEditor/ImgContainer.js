import React, {useEffect, useState, useRef} from "react";
import { fabric } from "fabric";
import { connect } from "react-redux";
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

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

	const textWidth = 600;
	const canvasRef = useRef(null);

	// PROPERTIES FOR TEXT BOX.
	var text2 = new fabric.Textbox(randomMessage(), {
		cursorColor :"blue",
		top:16,
		left:20,
		width: textWidth,
		fontFamily:'Alegreya Sans SC',
		fill:'white',
		stroke: 'black',
		fontWeight: 900,
		textTransform: 'uppercase'
	});

	// console.log("memeURL", meme_url);	

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

		// Img is set to a max of 500px
		const max_width =650;
		// // Calculates Scale to maintain aspect ratio of img
		// const scaleFactor = max_width / imgSize.width;
		// // console.log("SCALE FACTOR: ", scaleFactor)

		// const max_height = imgSize.width * scaleFactor;
		// console.log(max_height);
		
		
		memeImg.onload = function (img) {
			
			// Properties for Meme Image
			meme = new fabric.Image(memeImg, {
				angle: 0,
				left: 0,
				top: 0,
				// width: max_width,
				// height: max_height,
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
			canvas.setWidth(memeImg.width);
			canvas.setHeight(memeImg.height);



			//SAVING IMG FROM FABRICJS
			const CanvasToSVG = canvas.toSVG()
			// console.log(btoa(CanvasToSVG));
		};

		memeImg.crossOrigin = "anonymous";
		
			
		memeImg.src = tempImg
		// const upperText = text2.toUpperCase();
		let upperText = (text2.text.toUpperCase())
		canvas.add(text2);
		console.log('mememimg', memeImg)

		// Cleans up canvas after each new meme is generated
		return function clean_up () {
			canvas.dispose();
		}


	},[meme_url])
	function save(){
		const options = {
			quality: 0.95,
			allowTaint: true
		};
		const myCanvas = document.getElementById('canvasContainer');

		domtoimage.toJpeg((myCanvas),{ allowTaint: true }).then(function(dataURL){
			console.log(dataURL)
		var img = new Image();
		img.crossOrigin="anonymous";
		img.src =dataURL;
		document.body.appendChild(img);
		}).catch(function(error){
		console.log('oops, something went wrong!', error)
	});
			html2canvas(document.getElementById('d')).then(function(canvas){
				document.body.appendChild(canvas);
				console.log("HELLO", canvas.toDataURL())
				
			})
		}
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
