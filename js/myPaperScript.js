// var myPath = new Path();
// 	myPath.strokeColor = 'black';
// 	myPath.add(new Point(0, 0));
// 	myPath.add(new Point(100, 50));

// 	// myPath.insert(2, new Point (200, 50));
	
// 	for (i = 0; i<20; i++){
// 		myPath.insert(1+i, new Point(12*i, 15*i));
		
// 	}
// 	myPath.closed = true;

var width, height, center;
var points = 10;
var smooth = true;
var path = new Path();
var mousePos = view.center / 2;
var pathHeight = mousePos.y; // starting path height is half of the view's height
path.fillColor = 'black';
initializePath();

function initializePath() { 
	// The View object wraps an HTML element and 
	// handles drawing and user interaction through mouse/keyboard
	center = view.center;
	width = view.size.width;
	height = view.size.height / 2;
	path.segments = [];
	path.add(view.bounds.bottomLeft); //first point is bottom left
	for (var i = 1; i < points; i++) { // make 10 points between first and last
		var point = new Point(width / points * i, center.y);
		path.add(point);
	}
	path.add(view.bounds.bottomRight); //last point is bottom right
	path.fullySelected = true;
}


// function onFrame(event) {
// 	pathHeight += (center.y - mousePos.y - pathHeight) / 10; //view.center - mouseposition - mouseposition
// 	for (var i = 1; i < points; i++) {
// 		var sinSeed = event.count + (i + i % 10) * 100;
// 		var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
// 		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
// 		path.segments[i].point.y = yPos;
// 	}
// 	if (smooth)
// 		path.smooth();
// }

function onFrame(event) {
	var yPos;
	pathHeight = mousePos.y;
	for (var i = 1; i < points; i++) {
		if (i%2 == 0) {
		yPos = pathHeight + 10*i;
		}
		else {
			yPos = pathHeight - 10*i
		}
		path.segments[i].point.y = yPos;
	}
	if (smooth)
		path.smooth();
}


function onMouseMove(event) {
	mousePos = event.point;
}

// function onMouseDown(event) {
// 	smooth = !smooth;
// 	if (!smooth) {
// 		// If smooth has been turned off, we need to reset
// 		// the handles of the path:
// 		for (var i = 0, l = path.segments.length; i < l; i++) {
// 			var segment = path.segments[i];
// 			segment.handleIn = segment.handleOut = null;
// 		}
// 	}
// }

function onMouseDown(event) {	
	
}

// Reposition the path whenever the window is resized:
function onResize(event) {
	initializePath();
}