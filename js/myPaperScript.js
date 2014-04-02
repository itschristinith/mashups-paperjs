var myCircle;
var circleCount = 0;
var myCircles = [];

var circleGroup = new Group();
var imageGroup;

var frame;

var myImgNames = ['01.jpeg', '02.jpeg', '03.jpeg', '04.jpeg', '05.jpeg'];
var rasterImages = [];

var counter = 0;
var imgToShow = -1;
var imgToRemove = -2;

var isPathComplete = false;

var textItem = new PointText({
	content: 'Draw a path by clicking the mouse.',
	point: new Point(20, 30),
	fillColor: 'black',
});

function loadImages(){
	console.log("inside loadImages");
	for (var i = 0; i<myImgNames.length; i++){
		$('#body').append("<div class='visuallyHidden'" + 
			"<img id=" + myImgNames[i] + "src=" + myImgNames[i] + ">" +
			"</div>");
	}

	for(var i = 0; i<myImgNames.length; i++){
		var raster = new Raster(myImgNames[i]);
		raster.visible = false;
		raster.position = view.center;
		rasterImages.push(raster);
	}
	console.log("rasterImages array = " + rasterImages.length);
}

function drawFrame(){
	var width = view.size.width;
	var height = view.size.height;

	frame = new Path.Rectangle({
		point: [width/4, height/4],
		size: [520, 300],
		strokeColor: 'black',
		fillColor: 'black'
	});
}

function Circle(circleNum, circlePos){
	this.num = circleNum;
	this.pos = circlePos;
}

function showImages(img, rem){
	console.log("in show images");
	rasterImages[img].visible = true;
	console.log(rasterImages[img].visible);
	
	if (imgToRemove > -1){
	rasterImages[rem].visible = false;
	console.log(rasterImages[rem].visible);
	}
}

function onFrame(event){
	counter ++;
	if (counter%100 === 0){
			console.log("counter is at 100");
			imgToShow ++;
			imgToRemove ++;
			console.log("image to show = " + imgToShow);
			console.log("image to imgToRemove = " + imgToRemove);
			showImages(imgToShow, imgToRemove);
		}

	if (imgToShow===rasterImages.length-1) {
		imgToShow = -1;
		console.log("if greater imgtoshow:" + imgToShow);

	}
	if (imgToRemove===rasterImages.length-1) {
		imgToRemove = -1;
		console.log("if greater imgToRemove:" + imgToRemove);
	}
}

function onMouseDown(event) {
	if (isPathComplete == false && frame.bounds.contains(event.point)){
		console.log("intersects: " + frame.bounds.contains(event.point))
		
		//variable for each x,y of mouseclick and for count of total mouseclicks 
		var currPoint = event.point;
		circleCount = circleCount + 1;
		console.log("circleCount = " + circleCount);
		console.log("currPoint = " + currPoint);

		//create circle at every click
		myCircle = new Path.Circle(currPoint, 10);
		myCircle.fillColor = 'red';

		//add each circle to the circleGroup
		circleGroup.addChild(myCircle);
		console.log("circleGroup = " + circleGroup);	
					
		// store x,y and count into temp object, push to array of Circle prototype
		var tempObject = new Circle(circleCount, currPoint);
		myCircles.push(tempObject);
		console.log(myCircles);

		}
	}

// take each circle, compare it to all images
function getDistance( point1, point2 )
{
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

function getImagesForPoints(points){
	//for each point loop through images

		//check distance for each point to each image
			//var dist = getDistance(points[i], images[j])

			//check to see if its  minimmum 

			// if(dist<minDist){
			// 	dist = minDist;
			// }


}

function onMouseDrag(event) {

}

function onMouseUp(event) {

}

$(document).ready(function(){
	console.log("Loaded!");
	drawFrame();
	loadImages();
	$('#update').click(function(){
		myCircles.length = 0;
		circleCount = 0;
		console.log("myCircles (should be zero): " + myCircles.length);
		// project.activeLayer.removeChildren([2]);
		// showImages(imgToShow, imgToRemove);
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

