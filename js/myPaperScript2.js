// Create a raster item 
var raster = new Raster('img2.jpg');

// Move the raster to the center of the view
raster.position = view.center;
var currColor;
var selectedColor;
var path;
var pathTwo;
initializePath();

// function ifColor(){
// 	console.log("inside ifColor");
// 	for (var y = 0; y < raster.height; y++) {
// 		for(var x = 0; x < raster.width; x++) {
// 			// Get the color of the pixel:
// 			currColor = raster.getPixel(x, y);

// 			// if (currColor == selectedColor){
// 			// 	console.log("current color is: " + currColor);
// 			// 	console.log("selected color is: " + selectedColor);
// 			// }

// }

function initializePath(){
	path = new Path.Circle({
	center: [50, 50],
	radius: 30,
	strokeColor: 'black'
});
}

function onMouseDown(event) {
	// Set the fill color of the path to the average color
	// of the raster at the position of the mouse:
	selectedColor = raster.getAverageColor(event.point);
	path.fillColor = selectedColor;
	// ifColor();
}


//------------------------------------------------------
// // Create a raster item using the image tag with id='mona'
// var raster = new Raster('img2.jpg');

// // Hide the raster:
// raster.visible = false;

// // The size of our grid cells:
// var gridSize = 12;

// // Space the cells by 120%:
// var spacing = 1.2;

// As the web is asynchronous, we need to wait for the raster to load
// before we can perform any operation on its pixels.
// raster.on('load', function() {
// 	// Since the example image we're using is much too large,
// 	// and therefore has way too many pixels, lets downsize it to
// 	// 40 pixels wide and 30 pixels high:
// 	raster.size = new Size(40, 30);

// 	for (var y = 0; y < raster.height; y++) {
// 		for(var x = 0; x < raster.width; x++) {
// 			// Get the color of the pixel:
// 			var color = raster.getPixel(x, y);

// 			// Create a circle shaped path:
// 			var path = new Path.Circle({
// 				center: new Point(x, y) * gridSize,
// 				radius: gridSize / 2 / spacing
// 			});

// 			// Set the fill color of the path to the color
// 			// of the pixel:
// 			path.fillColor = color;
// 		}
// 	}

// 	// Move the active layer to the center of the view, so all 
// 	// the created paths in it appear centered.
// 	project.activeLayer.position = view.center;
// });

// // Move the active layer to the center of the view:
// project.activeLayer.position = view.center;

//------------------------------------------------------
// Create a raster item using the image tag with id='mona'
// var raster = new Raster('img1.jpg');
// Move the raster to the center of the view
// raster.position = view.center;

// // As the web is asynchronous, we need to wait for the raster to load
// // before we can perform any operation on its pixels.
// raster.on('load', function() {
// 	// Downsize the pixel content to 80 pixels wide and 60 pixels high:
// 	raster.size = new Size(400, 400);
// });

//------------------------------------------------------
//draw the average color of mouse position in the circle
// var raster = new Raster('img2.jpg');
// // Move the raster to the center of the view
// raster.position = view.center;

// // Create a circle shaped path at {x: 50, y: 50}
// // with a radius of 30:
// var path = new Path.Circle({
// 	center: [50, 50],
// 	radius: 30,
// 	strokeColor: 'white'
// });

// function onMouseMove(event) {
// 	// Set the fill color of the path to the average color
// 	// of the raster at the position of the mouse:
// 	path.fillColor = raster.getAverageColor(event.point);
// }


//------------------------------------------------------
// basic drawing code
// var myPath;

// function onMouseDown(event) {
// 	myPath = new Path();
// 	myPath.strokeColor = 'black';
// }

// function onMouseDrag(event) {
// 	myPath.add(event.point);
// }