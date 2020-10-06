// var chosenYaxis = "healthcare";
// function used for updating x-scale var upon click on axis label
function xScale(healthData, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(healthData, d => d[chosenXAxis] - 1), d3.max(healthData, d => d[chosenXAxis] + 1)
        ])
        .range([0, width]);

    return xLinearScale;
}
