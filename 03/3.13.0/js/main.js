/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 1 - Star Break Coffee
 */
var margin = { left: 100, right: 10, top: 10, bottom: 100 };

//creating margin for labelling for 600 by 400 box size
var width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  //to group elements togeter do
  .append("g")
  //to shift gropued ellemnts in a givem left and top direction
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//X label
svg
  .append("text")
  .attr("class", "x axis-label") //appends class to the text ellement
  .attr("x", width / 2) //centeres bar labels
  .attr("y", height + 60) //distance between bars and text
  .attr("font-size", "20px")
  .attr("text-anchor", "middle") // chart title
  .text("Month");

//Y label
svg
  .append("text")
  .attr("class", "y axis-label") //appends class to the text ellement
  .attr("x", -(height / 2)) //centeres bar labels
  .attr("y", -60) //distance between bars and text
  .attr("font-size", "20px")
  .attr("text-anchor", "middle") // chart title
  .attr("transform", "rotate(-90)")
  .text(" Revenue ");

d3.json("data/revenues.json").then((data) => {
  console.log(data);
  // console.log(d.month.substr(0, 3));
  data.forEach((d) => {
    d.revenue = +d.revenue;
    d.month = d.month.substr(0, 3);
    // d.profit = +d.profit;
    // console.log(d.month);
  });
  // our x axis
  var x = d3
    .scaleBand()
    //using scaleBand, the domain will collect the names in the month column of the data and datermine the space based on a summary array like count
    .domain(data.map((d) => d.month))
    .range([0, width])
    .paddingInner(0.3) // space between bars
    .paddingOuter(0.3); //outer space
  // domain going from 0 to maximum in the data so we use an inbuilt function
  var y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.revenue)])
    .range([height, 0]); //reverse so 0 goes to bottom or to flip the chart
  // X Axis label
  var xAxisCall = d3.axisBottom(x);
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxisCall)
    .selectAll("text")
    .attr("y", "10")
    .attr("x", "-5")
    .attr("text-anchor", "middle") //plces label in the middel of each tick
    .attr("transform", "rotate(0)");

  var yAxisCall = d3.axisLeft(y).ticks(10);
  // .tickFormat((d) => `$${d}`);

  svg.append("g").attr("class", "y-axis").call(yAxisCall);
  //rectangular bars
  var rects = svg.selectAll("rect").data(data);
  // (d) => console.log(d.month.substring(0, 4));
  rects
    .enter()
    .append("rect")
    .attr("y", (d) => y(d.revenue))
    .attr("x", (d) => x(d.month))
    .attr("width", x.bandwidth)
    .attr("height", (d) => height - y(d.revenue))
    .attr("fill", "aqua");
  // updating the chart
  // d3.interval(() => {
  //   update(data);
  // }, 1000);
});

// const update = (data) => {};
