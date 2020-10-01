/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.7 - Loading external data
 */

<<<<<<< HEAD
d3.csv("data/ages.csv").then(function(data) {

  // weselect the age column in the following and covert iof from string to float
  data.forEach((d) => {
    d.age = +d.age;
  });
  // console.log(data);
  // data.forEach(function(d){
  //     d.age = +d.age;


  var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

  var circles = svg.selectAll("circle")
    .data(data);

  circles.enter()
    .append("circle")
    .attr("cx", function(d, i) {
      console.log(d);
      return (i * 50) + 25;
    })
    .attr("cy", 25)
    .attr("r", function(d) {
      return d.age * 2;
    })
    .attr("fill", function(d) {
      if (d.name == "Tony") {
        return "blue";
      } else {
        return "red";
      }
    });
}).catch((error) => {
  console.error(error);
});
=======
d3.json("/data/ages.json").then(data => {
	data.forEach(d => {
		d.age = Number(d.age)
	})
	
	const svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400)

	const circles = svg.selectAll("circle")
		.data(data)

	circles.enter().append("circle")
		.attr("cx", (d, i) => (i * 50) + 50)
		.attr("cy", 250)
		.attr("r", (d) => 2 * d.age)
		.attr("fill", d => {
			if (d.name === "Tony") {
				return "blue"
			}
			else {
				return "red"
			}
		})
}).catch(error => {
	console.log(error)
})
>>>>>>> 418f888bab265507b5431c03399ff97a0c22e106
