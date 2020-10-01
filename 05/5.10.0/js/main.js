/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 2 - Gapminder Clone
 */
var margin = { left: 80, right: 20, top: 50, bottom: 100 };

var width = 600 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

d3.json("data/data.json").then((data) => {
  data;
  // console.log(data);
  // Clean data
  const formattedData = data.map((year) => {
    return (
      year["countries"]
        .filter((country) => {
          // filters for countries with non-null incomes and lfe expectancy
          var dataExists = country.income && country.life_exp;
          return dataExists;
        })
        // convert to numerics
        .map((country) => {
          country.income = +country.income;
          country.life_exp = +country.life_exp;
          // console.log([country.income]);

          return country;
        })
    );
  });
});
