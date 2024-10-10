const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

// Function to validate budget input
function cleanInputString(str) {
    const regex = /[+-\s]/g;
  return str.replace(regex, "");

 
    // Add your code here to process the input string based on the matched pattern
    // For example, you can remove all occurrences of "hello" from the input string
    // or replace them with another string, etc.
}

function isInvalidInput(str){
    const regex = /[0-9]+e[0-9]+/i;
}
