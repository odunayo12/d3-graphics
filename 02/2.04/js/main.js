/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.4 - Adding SVGs with D3
 */

<<<<<<< HEAD
// append tells us what is to be addest to whatever the selector selects
// the svg defines an area in whixh we want to draw a shape
var svg = d3.select("#chart-area").append("svg")
  .attr("width", 1500)
  .attr("height", 800);
// here append tells us we want to draw a circle in the svg box hence we use svg.append("circle")
var circle = svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "grey");

// append a rectangle
var rectangle = svg.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 120)
  .attr("height", 120)
  .attr("fill", "pink");

var ellip = svg.append("ellipse")
	.attr("cx", 200)
	.attr("cy", 150)
	.attr("rx", 20)
	.attr("ry", 60)
	.attr("r", 30)
	.attr("stroke", "green")
	.attr("fill", "yellow");

var lineEins = svg.append("line")
	.attr("x1", 300)
	.attr("x2", 700)
	.attr("y1", 50)
	.attr("y2", 230)
	.attr("stroke", "green")
	.attr("stroke-width", 3)
 
=======
const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "red")
>>>>>>> 418f888bab265507b5431c03399ff97a0c22e106
