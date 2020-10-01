/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var mySvg = d3.select("#chart-area")
  .append('svg')
  .attr('width', "400")
  .attr('height', "400");

d3.json('data/buildings.json').then(function (data) {
// convert height to float
  data.forEach(function(d) {
    d.height = +d.height;
  });


  var myRect =  mySvg.selectAll('rect')
  .data(data)
  .enter().append('rect')
      .attr("x", function(d, i) {
        // console.log(d);
        return (i * 60);
      })
      .attr('y', 0)
      .attr('width', 40)
      .attr('height', function (d) {
        return d.height;
      })
      .attr('fill', function (d) {
        return '#111';
      });

})
