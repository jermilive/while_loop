var n = 0;

while (n < 5) {
  n++;
  console.log('n = ' + n);
}

var i = 0;

do {
  i++;
  console.log('i = ' + i);
} while (i < 5);

// document.addEventListener('mousemove', (event) => {
//   console.log(event.clientY);
// });

// Shows cursor position
document.addEventListener('mousemove', (event) => {
  console.log('event.clientX && event.clientY');
});

// Saved to look at later
// const eleSvg = document.querySelector('svg');
// let point = eleSvg.createSVGPoint();
// var cursorpt = point.matrixTransform(eleSvg.getScreenCTM().inverse());
// point.viewport_x = cursorpt.x;
// point.viewport_y = cursorpt.y;
