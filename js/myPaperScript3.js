//------------------------------------------------------
// basic drawing code
var myPath;

var textItem = new PointText({
	content: 'Click and drag to draw a line.',
	point: new Point(20, 30),
	fillColor: 'black',
});

function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeWidth = 10;
	myPath.strokeColor = 'red';
}

function onMouseDrag(event) {
	myPath.add(event.point);
}

// When the mouse is released, we simplify the path:
function onMouseUp(event) {
	var segmentCount = myPath.segments.length;

	// When the mouse is released, simplify it:
	myPath.simplify(1);

	// Select the path, so we can see its segments:
	// myPath.fullySelected = true;

	var newSegmentCount = myPath.segments.length;
	var difference = segmentCount - newSegmentCount;
	var percentage = 100 - Math.round(newSegmentCount / segmentCount * 100);
	textItem.content = difference + ' of the ' + segmentCount + ' segments were removed. Saving ' + percentage + '%';
}

// //this is another way of doing the path on the onMouseDown function. what's the diff?
// // Create a new path and set its stroke color to black:
// path = new Path({
// 	segments: [event.point],
// 	strokeColor: 'black',
// 	// Select the path, so we can see its segment points:
// 	fullySelected: true
// });
// }

