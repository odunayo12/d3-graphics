/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    5.6 - Making our chart dynamic
 */

<<<<<<< HEAD
var margin = { left: 80, right: 20, top: 50, bottom: 100 };

var width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var flag = true;

var g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

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

// Y Label
var yLabel = g
  .append("text")
  .attr("y", -60)
  .attr("x", -(height / 2))
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue");

d3.json("data/revenues.json").then(function (data) {
  // console.log(data);

  // Clean data
  data.forEach(function (d) {
    d.revenue = +d.revenue;
    d.profit = +d.profit;
  });

  d3.interval(function () {
    update(data);
    //flag is a global boolean variable with default value as true. Here, we make it take a value of false if true (on the last update) and true else
    flag = !flag;
  }, 1000);

  // Run the vis for the first time
  update(data);
});

function update(data) {
  // if value is flag, that is, true then update with revenue else profit
  var value = flag ? "revenue" : "profit";

  x.domain(
    data.map(function (d) {
      return d.month;
    })
  );
  // domain mapping now takes the max figure in the rvrnue or profit column as per update
  y.domain([
    0,
    d3.max(data, function (d) {
      return d[value];
    }),
  ]);

  // X Axis
  var xAxisCall = d3.axisBottom(x);
  xAxisGroup.call(xAxisCall);

  // Y Axis
  var yAxisCall = d3.axisLeft(y).tickFormat(function (d) {
    return "$" + d;
  });
  yAxisGroup.call(yAxisCall);

  // JOIN new data with old elements.
  var rects = g.selectAll("rect").data(data);

  // EXIT old elements not present in new data.
  rects.exit().remove();

  // UPDATE old elements present in new data.
  rects
    .attr("y", function (d) {
      return y(d[value]);
    })
    .attr("x", function (d) {
      return x(d.month);
    })
    .attr("height", function (d) {
      return height - y(d[value]);
    })
    .attr("width", x.bandwidth);

  // ENTER new elements present in new data.
  rects
    .enter()
    .append("rect")
    .attr("y", function (d) {
      return y(d[value]);
    })
    .attr("x", function (d) {
      return x(d.month);
    })
    .attr("height", function (d) {
      return height - y(d[value]);
    })
    .attr("width", x.bandwidth)
    .attr("fill", "grey");
  // yLabel a global varible will be updated based on the value of flag and update it accordingly
  var label = flag ? "Revenue" : "Profit";
  yLabel.text(label);
=======
const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

let flag = true

const svg = d3.select("#chart-area").append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

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
const yLabel = g.append("text")
  .attr("class", "y axis-label")
  .attr("x", - (HEIGHT / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")

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
    d.profit = Number(d.profit)
  })

  console.log(data)

  d3.interval(() => {
    flag = !flag
    update(data)
  }, 1000)

  update(data)
})

function update(data) {
  const value = flag ? "profit" : "revenue"

  x.domain(data.map(d => d.month))
  y.domain([0, d3.max(data, d => d[value])])

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

  // JOIN new data with old elements.
  const rects = g.selectAll("rect")
    .data(data)

  // EXIT old elements not present in new data.
  rects.exit().remove()

  // UPDATE old elements present in new data.
  rects
    .attr("y", d => y(d[value]))
    .attr("x", (d) => x(d.month))
    .attr("width", x.bandwidth)
    .attr("height", d => HEIGHT - y(d[value]))

  // ENTER new elements present in new data.  
  rects.enter().append("rect")
    .attr("y", d => y(d[value]))
    .attr("x", (d) => x(d.month))
    .attr("width", x.bandwidth)
    .attr("height", d => HEIGHT - y(d[value]))
    .attr("fill", "grey")

  const text = flag ? "Profit ($)" : "Revenue ($)"
  yLabel.text(text)
>>>>>>> 418f888bab265507b5431c03399ff97a0c22e106
}
