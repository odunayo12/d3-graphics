/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/

const data = [25, 20, 10, 12, 15]

const svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400)

<<<<<<< HEAD
var circles = svg.selectAll("circle")
    .data(data);
// data has been appended to the circeles and we have used selectAll to select all the circel with the attr data
circles.enter()
    .append("circle")
        .attr("cx", function(d, i){
            return (i * 50) + 25;
        })
        // i * 50 shift the centered position of eeach on the x axis
        // note d=iten, i = index of the data array
        .attr("cy", 25)
        .attr("r", function(d){
            return d;
        })
        .attr("fill", "red");
=======
const circles = svg.selectAll("circle")
	.data(data)

circles.enter().append("circle")
	.attr("cx", (d, i) => (i * 50) + 50)
	.attr("cy", 250)
	.attr("r", (d) => d)
	.attr("fill", "red")
>>>>>>> 418f888bab265507b5431c03399ff97a0c22e106
