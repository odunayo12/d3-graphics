/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    5.3 - Adding an update function
 */

<<<<<<< HEAD
//Note dot passes in or adds something to what it is attached to
//the following are now global variables
var margin = { left: 80, right: 20, top: 50, bottom: 100 };

var width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
//axis generator
var xAxisGroup = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")");

var yAxisGroup = g.append("g").attr("class", "y axis");

// X Scale
var x = d3.scaleBand().range([0, width]).padding(0.2);

// Y Scale
var y = d3.scaleLinear().range([height, 0]);

// X Label
g.append("text")
  .attr("y", height + 50)
  .attr("x", width / 2)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Month");
=======
const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

const svg = d3.select("#chart-area").append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
>>>>>>> 418f888bab265507b5431c03399ff97a0c22e106

const g = svg.append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

// X label
g.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH / 2)
  .attr("y", HEIGHT + 60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Month")

// Y label
g.append("text")
<<<<<<< HEAD
  .attr("y", -60)
  .attr("x", -(height / 2))
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue");

d3.json("data/revenues.json").then(function (data) {
  // console.log(data);

  // Clean data
  data.forEach((d) => (d.revenue = +d.revenue));

  // Run the visusalization for the first time using (eq 1) below so it does not wait a second to load.
  update(data);

  // sets data updates interval to every other second after the initial update defined above
  d3.interval(() => update(data), 1000);
});

//(eq 1) here are stuffs that the chart needs to be updated with. That is if data changes, update the chart with the following
const update = (data) => {
  //scales need to change since if data
  x.domain(data.map((d) => d.month));
  y.domain([0, d3.max(data, (d) => d.revenue)]);

  // X Axis generator
  var xAxisCall = d3.axisBottom(x);
  xAxisGroup.call(xAxisCall);

  // Y Axis generator
  var yAxisCall = d3.axisLeft(y).tickFormat((d) => "$" + d);
  yAxisGroup.call(yAxisCall);

  // Bars
  var rects = g.selectAll("rect").data(data);
  console.log(rects);

  // rects.enter()
  //     .append("rect")
  //         .attr("y", function(d){ return y(d.revenue); })
  //         .attr("x", function(d){ return x(d.month) })
  //         .attr("height", function(d){ return height - y(d.revenue); })
  //         .attr("width", x.bandwidth)
  //         .attr("fill", "grey");
};
=======
  .attr("class", "y axis-label")
  .attr("x", - (HEIGHT / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue ($)")

const x = d3.scaleBand()
  .range([0, WIDTH])
  .paddingInner(0.3)
  .paddingOuter(0.2)

const y = d3.scaleLinear()
  .range([HEIGHT, 0])

const xAxisGroup = g.append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${HEIGHT})`)

const yAxisGroup = g.append("g")
  .attr("class", "y axis")

d3.csv("data/revenues.csv").then(data => {
  data.forEach(d => {
    d.revenue = Number(d.revenue)
  })

  d3.interval(() => {
    update(data)
  }, 1000)

  update(data)
})

function update(data) {
  x.domain(data.map(d => d.month))
  y.domain([0, d3.max(data, d => d.revenue)])

  const xAxisCall = d3.axisBottom(x)
  xAxisGroup.call(xAxisCall)
    .selectAll("text")
      .attr("y", "10")
      .attr("x", "-5")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-40)")

  const yAxisCall = d3.axisLeft(y)
    .ticks(3)
    .tickFormat(d => d + "m")
  yAxisGroup.call(yAxisCall)

  // const rects = g.selectAll("rect")
  //   .data(data)
  
  // rects.enter().append("rect")
  //   .attr("y", d => y(d.revenue))
  //   .attr("x", (d) => x(d.month))
  //   .attr("width", x.bandwidth)
  //   .attr("height", d => HEIGHT - y(d.revenue))
  //   .attr("fill", "grey")
}
>>>>>>> 418f888bab265507b5431c03399ff97a0c22e106
