var tabledata = data;

// Select the submit button
var submit = d3.select("#filter-btn");

  submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value and get the raw HTML node
  
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tabledata);



 
  var filteredData = tabledata.filter(tabledata => tabledata.datetime == inputValue);

  console.log(filteredData)

  var date = filteredData.map(tabledata => tabledata.datetime);
  var city = filteredData.map(tabledata => tabledata.city);
  var state = filteredData.map(tabledata => tabledata.state);
  var country = filteredData.map(tabledata => tabledata.country);
  var shape = filteredData.map(tabledata => tabledata.shape);
  var durationminutes = filteredData.map(tabledata => tabledata.durationMinutes);
  var comments = filteredData.map(tabledata => tabledata.comments);



  d3.select(".summary")
   .append("li").text(`Date Time: ${date}`)
   .append("li").text(`City: ${city}`)
   .append("li").text(`State: ${state}`)
   .append("li").text(`Shape: ${shape}`)
   .append("li").text(`Duration Minutes: ${durationminutes}`)
   .append("li").text(`Comments: ${comments}`);
 
});
