import React, {useEffect, useState} from "react";
import { fabric } from "fabric";
import color from "@material-ui/core/colors/amber";

function ImgContainer() {
	const [memeData, setMemeData] = useState({
		name: "batman-slapping-robin",
		url: "https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg"
	});
	const [imgSize, setImgSize] = useState({

	})

	useEffect(() => {

		console.log(memeData.url.width)


		var canvas = new fabric.Canvas('d',{
			preserveObjectStacking:true
		});

		canvas.backgroundColor='white';

		let tempImg = memeData.url;
		let slap;
		let slapImg = new Image();
		console.log(slapImg.width)

		slapImg.onload = function (img) {
			slap = new fabric.Image(slapImg, {
				angle: 0,
				width: 500,
				left: 0,
				top: 0,
				selectable: true,      
				borderColor: 'red',
				cornerColor: 'green',
				cornerSize: 12,
				transparentCorners: false	
			});
			canvas.add(slap);
			// This is like z-index, this keeps the image behind the text
			canvas.moveTo(slap, 0);
		};
		slapImg.src = tempImg;

		var text = new fabric.Textbox('Hello world From Fabric JS', {
			width:250,
			cursorColor :"blue",
			top:10,
			left:10,
			fontFamily:'impact',
		});
		
		canvas.add(text)
		var rect = new fabric.Rect({
			left: 100,
			top: 100,
			fill: 'red',
			width: 20,
			height: 20
		  });
		  
		  canvas.add(rect);
	},[])



	return (
		<div className="MainContainer">
			<div className="MemeContainer">
					<canvas id="d" className="CanvasC" width='500' height='500' ></canvas>
			</div>
		</div>
	);
}

export default ImgContainer;
