// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    
    var inputElementDate = d3.select("#datetime");
    var inputValueDate = inputElementDate.property("value");

    var inputElementCity = d3.select("#city");
    var inputValueCity = inputElementCity.property("value");

    var inputElementState = d3.select("#state");
    var inputValueState = inputElementState.property("value");

    var inputElementCountry = d3.select("#country");
    var inputValueCountry = inputElementCountry.property("value");

    var inputElementShape = d3.select("#shape");
    var inputValueShape = inputElementShape.property("value");

    var filteredData = tableData;

    console.log(filteredData)

    if (inputValueDate !== "") { 
    filteredData = filteredData.filter(siting => siting.datetime === inputValueDate);
    }
    console.log(filteredData)

    if (inputValueCity !== "") {
    filteredData = filteredData.filter(siting => siting.city === inputValueCity);
    }

    if (inputValueState !== "") {
    filteredData = filteredData.filter(siting => siting.state === inputValueState);
    }

    if (inputValueCountry !== "") {
    filteredData = filteredData.filter(siting => siting.country === inputValueCountry);
    }

    if (inputValueShape !== "") {
    filteredData = filteredData.filter(siting => siting.shape === inputValueShape);
    }

    console.log(filteredData)

var tbody = d3.select("tbody")
tbody.selectAll("tr").remove();

filteredData.forEach((fd) => {
    var row = tbody.append("tr");
    Object.entries(fd).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


});

