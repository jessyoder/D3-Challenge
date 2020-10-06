// Your Code Here
// Set up the chart
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;


// Create an SVG wrapper, append an SVG group 
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from the data.csv file
d3.csv("data.csv").then(function(healthData) {
    console.log(healthData);

    // Cast data we need as numbers
    // ==============================
    healthData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;   
    });

    // Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
      .domain([d3.min(healthData, d => d.poverty) -1, d3.max(healthData, d => d.poverty) +1])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([d3.min(healthData, d => d.healthcare) -1, d3.max(healthData, d => d.healthcare) +1])
      .range([height, 0]);

    // Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("g circlesgroup")
      .data(healthData)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.poverty))
      .attr("cy", d => yLinearScale(d.healthcare))
      .attr("r", "15")
      .attr("fill", "#89bdd3")
      .attr("opacity", ".5");
    circlesGroup.append("text")
      .text(function(d) {
        return d.abbr;
      })
      .attr("dx", d => xLinearScale(d.poverty))
      .attr("dy", d => yLinearScale(d.healthcare));

    // Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
      .attr("class", "d3-tip")
      .offset([10, -10])
      .html(function(d) {
          return (`${d.abbr}`)
        });
      
    // Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("mouseover", function(data) {
        toolTip.show(data, this);
      })
        // onmouseout event
        .on("mouseout", function(data, index) {
          toolTip.hide(data);
        });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "aText")
      .text("Lacks Healthcare (%)");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "aText")
      .text("Living in Poverty (%)");
}).catch(function(error) {
    console.log(error);
 

  });
