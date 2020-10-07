# D3-Challenge - Data Journalism and D3

My task is analyzing the current trends shaping people's lives, as well as creating charts and interactive elements to help readers understand my findings.

My challenge is to run a series of feature stories about the health risks facing particular demographics. I need to sift through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the assignment is based on 2014 ACS 1-year estimates. The current data set includes data on rates of income, obesity, poverty, etc. by state. 

## The Task

I needed to create a scatter plot between two of the data variables: I chose "Healthcare" and "Poverty."

Using the D3 techniques I have learned, I created a scatter plot that represents each state with circle elements. I coded this graphic in the `app.js` file, pulling in the data from `data.csv` by using the `d3.csv` function. 

* I included state abbreviations in the circles.

* I created and situated the axes and labels to the left and bottom of the chart.

### Bonus: (Optional Challenge)

#### 1. More Data, More Dynamics

I included more demographics and more risk factors in my app-bonus.js file. I place additional labels on the x-axis of my scatter plot and gave them click events so that users can decide which data to display. I animated the transitions for the circles' locations as well as the range of your axes. I did this for three risk factors on the x-axis, as well as displaying a different piece of data on the y-axis. 

#### 2. Incorporate d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Because of this, I added tooltips: I implemented these in my D3 graphics to reveal a specific element's state abbreviation and values for the two risk factors being measured. These pieces of data appear when the user hovers their cursor over the element. 
