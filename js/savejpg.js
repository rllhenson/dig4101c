			// Grab the Canvas and Drawing Context
			var oCanvas = document.getElementById("screen");
			var oCtx = oCanvas.getContext("2d");

			// var canvas = document.getElementById("canvas");
			// var dataURL = canvas.toDataURL();
			// console.log(dataURL);
			// // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
			// // blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"

			var iWidth = oCanvas.width;
			var iHeight = oCanvas.height;

			var strDataURI = oCanvas.toDataURL("image/jpeg");

			function convertCanvas(strType) {
				if (strType == "PNG")
					var oImg = Canvas2Image.saveAsPNG(oCanvas, true);
				if (strType == "BMP")
					var oImg = Canvas2Image.saveAsBMP(oCanvas, true);
				if (strType == "JPEG")
					var oImg = Canvas2Image.saveAsJPEG(oCanvas, true);

				if (!oImg) {
					alert("Sorry, this browser is not capable of saving " + strType + " files!");
					return false;
				}

				//oImg.id = "canvasimage";

				//oImg.style.border = oCanvas.style.border;
				//document.body.replaceChild(oImg, oCanvas);

				showDownloadText();
			}

			function saveCanvas(pCanvas, strType) {
				var bRes = false;
				if (strType == "PNG")
					bRes = Canvas2Image.saveAsPNG(oCanvas);
				if (strType == "BMP")
					bRes = Canvas2Image.saveAsBMP(oCanvas);
				if (strType == "JPEG")
					bRes = Canvas2Image.saveAsJPEG(oCanvas);

				if (!bRes) {
					alert("Sorry, this browser is not capable of saving " + strType + " files!");
					return false;
				}
			}

			document.getElementById("savepngbtn").onclick = function() {
				saveCanvas(oCanvas, "PNG");
			}

			//makes savable
			// save canvas image as data url (png format by default)
	      	var dataURL = oCanvas.toDataURL("image/png");
	      	var canvas = dataURL.replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


			//window.location.href=image;
			// var canvas = document.getElementById("mycanvas");
			// var img    = canvas.toDataURL("image/png");

			// with the value in IMG you can write it out as a new Image like so:

			// document.write('<img src="'+img+'"/>');



	      	
		    //document.getElementById('canvasImg').src = dataURL;