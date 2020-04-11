"use strict";

console.log("Coffee Project");

function renderCoffee(coffee) {
  var html = '<div class="coffee">';
  html += '<div class="coffee-content"><h2>' + coffee.name + "</h2>";
  html += "<p>" + coffee.roast + "</p></div>";
  html += "</div>";

  return html;
}

// renders coffees in ascending order usind the id's;
function renderCoffees(coffees) {
  var html = "";
  for (var i = coffees.length - 1; i >= 0; i--) {
    coffees.sort(function(a, b) {
      return b.id - a.id;
    });
    html += renderCoffee(coffees[i]);
  }

  return html;
}

// Coffee Filter function
function filterCoffees() {
  var input, filter, div, h2, para, a, b, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toLowerCase();
  div = document.getElementById("coffees");
  h2 = div.getElementsByTagName("h2");
  para = div.getElementsByTagName("p");

  for (i = 0; i < h2.length; i++) {
    a = h2[i];
    b = para;
    txtValue = a.textContent || a.innerText;

    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      h2[i].style.display = b[i].style.display = "";
    } else {
      h2[i].style.display = b[i].style.display = "none";
    }
  }
}

function updateCoffees(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  var selectedRoast = roastSelection.value;
  var filteredCoffees = [];
  coffees.forEach(function(coffee) {
    if (coffee.roast === selectedRoast || selectedRoast === "all") {
      filteredCoffees.push(coffee);
    }
  });
  tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Add New Coffee
function addNewCoffee(input) {
  for (var i = 0; i < coffees.length; i++) {
    // unshift will add a new item to the beginning of the array
    if (typeof Storage !== "undefined") {
      console.log("Code for localStorage/sessionStorage.");
    } else {
      console.log("Sorry! No Web Storage support..");
    }
  }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

// coffee list;
var coffees = [
  { id: 1, name: "Light City", roast: "light" },
  { id: 2, name: "Half City", roast: "light" },
  { id: 3, name: "Cinnamon", roast: "light" },
  { id: 4, name: "City", roast: "medium" },
  { id: 5, name: "American", roast: "medium" },
  { id: 6, name: "Breakfast", roast: "medium" },
  { id: 7, name: "High", roast: "dark" },
  { id: 8, name: "Continental", roast: "dark" },
  { id: 9, name: "New Orleans", roast: "dark" },
  { id: 10, name: "European", roast: "dark" },
  { id: 11, name: "Espresso", roast: "dark" },
  { id: 12, name: "Viennese", roast: "dark" },
  { id: 13, name: "Italian", roast: "dark" },
  { id: 14, name: "French", roast: "dark" }
];

//query selectors
var tbody = document.querySelector("#coffees");
var roastSelection = document.querySelector("#roast-selection");
var addNewCoffee = document.querySelector("#new-coffee-btn");
// var submitButton = document.querySelector("#submit"); this is currently not useful yet

tbody.innerHTML = renderCoffees(coffees);

// Event Listeners
roastSelection.addEventListener("change", updateCoffees);
addNewCoffee.addEventListener("click", addNewCoffee); // when user clicks should push new item to the array
// submitButton.addEventListener("click", filterCoffees); not useful yet;
