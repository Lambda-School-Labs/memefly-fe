import React from 'react';

const [dimension, setDimension] = useState();

export function getDimensions(url) {
  var img = new Image();
  img.addEventListener("load", function() {
    console.log(
      "width: " + this.width + "px" + " " + "height: " + this.height + "px"
    );
    // setDimension(width: this.n)
  });
  img.src = url;
}