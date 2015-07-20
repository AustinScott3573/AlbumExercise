// Create a variable that holds your name
var myName = "Austin";

// Create an object that holds your personal information
var myInfo = {
  age: 23,
  last_company: "blah",
  marital_status: "Single",
  spouse: "None"
};

// Add your name as a new key on the info object
myInfo.Austin = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4,
  record: "#",
  album: "#"
};

var Tool = {
  name: "10,000 days",
  artist: "Tool",
  year: 1200,
  sales: 11000000,
  number_of_hits: 10,
  record: "#",
  album: "#"
};

var Something = {
  name: "Made upr",
  artist: "Who cares",
  year: 1981,
  sales: 11000000,
  number_of_hits: 7,
  record: "#",
  album: "#"
};

// Create an array that holds records
var recordArray = [Eliminator, Something, Tool];

// Add at least two more album objects to the array



/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var rate = function (album, rating ) {
  // Add the rating to the album
  album.rating = rating;
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (all) {
  for (var i = 0; i < recordArray.length; i++) {
   rate(recordArray[i], 5);
  }
};

// Call the function that starts modifying the array
modifyAlbums(2); 
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById("records");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);

