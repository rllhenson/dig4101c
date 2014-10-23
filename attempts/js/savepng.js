
			//makes savable
			// save canvas image as data url (png format by default)
			var oCanvas = document.getElementById("screen");
	      	var dataURL = oCanvas.toDataURL("image/png");
	      	var canvas = dataURL.replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


			//window.location.href=image;
			// var canvas = document.getElementById("mycanvas");
			// var img    = canvas.toDataURL("image/png");

			// with the value in IMG you can write it out as a new Image like so:

			// document.write('<img src="'+img+'"/>');



	      	
		    //document.getElementById('canvasImg').src = dataURL;