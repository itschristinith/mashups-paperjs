//load images and animate images
//get image data from openframeworks

//------------------------------------------------------
// basic drawing code
var myPath;
var myCircle;
var circleCount =0;
var myCircles = [];
var isPathComplete = true;
var frame;
var myImage = 'img2.jpg';
// var myImgNames = ['img1.jpg', 'img2.jpg'];


// function loadImages(){
// 	console.log("inside loadImages");
// // for (i = 0; i<myImgNames; i++){
// // 	console.log("inside image loop");
 	var raster = new Raster('img1.jpg');
 	raster.visible = false;
	raster.position = view.center;
// 	console.log("images loaded");
// // }
// }

function Circle(circleNum, circlePos){
	this.num = circleNum;
	this.pos = circlePos;
}

var textItem = new PointText({
	content: 'Draw a path by clicking the mouse.',
	point: new Point(20, 30),
	fillColor: 'black',
});

function drawFrame(){
	var width = view.size.width;
	var height = view.size.height;

	frame = new Path.Rectangle({
		point: [width/4, height/4],
		size: [520, 300],
		strokeColor: 'black',
		fillColor: 'black'
	})
}

function onMouseDown(event) {
	if (isPathComplete == true && frame.bounds.contains(event.point)){
		console.log("intersects: " + frame.bounds.contains(event.point))
		
		//variable for each x,y of mouseclick and for count of total mouseclicks 
		var currPoint = event.point;
		circleCount = circleCount + 1;
		console.log(circleCount);
		console.log(currPoint);

		//create circle at every click
		myCircle = new Path.Circle({
		center: currPoint,
		radius: 10
		});
		myCircle.fillColor = 'red';
		
		//store x,y and count into temp object, push to array of Circle prototype
		var tempObject = new Circle(circleCount, currPoint);
		myCircles.push(tempObject);
		console.log(myCircles);

		//create new layer of myCircle so they can be removed later
		// var circleLayer = new Layer ({
		// 	children: [myCircle],
		// });
		}
		else {
		//code for sending object data to API here
		
		console.log("first in else statement: " + isPathComplete);
		isPathComplete = true;
		console.log("second in else statement: " + isPathComplete);
	}
}


function onMouseDrag(event) {

}

function onMouseUp(event) {

}

$(document).ready(function(){
	console.log("Loaded!");
	drawFrame();
	// loadImages();
	$('#update').click(function(){
		isPathComplete = false;
		console.log("button press: " + isPathComplete);
		myCircles.length = 0;
		circleCount = 0;
		console.log("myCircles should be clear: " + myCircles.length);
		project.activeLayer.removeChildren([2]);
		raster.visible = true;
		// $("#body").append("<img src=" + myImage + "/>");
		isPathComplete = true;
	})


});
// //this is another way of doing the path on the onMouseDown function. what's the diff?
// // Create a new path and set its stroke color to black:
// path = new Path({
// 	segments: [event.point],
// 	strokeColor: 'black',
// 	// Select the path, so we can see its segment points:
// 	fullySelected: true
// });
// }

