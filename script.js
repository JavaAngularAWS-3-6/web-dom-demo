// typical variable declaration like we expect
let var1 = "something";
// old, outdated es5 stuff - doesn't feature block scoping (weird)
var var2 = "something";
//final unchangeable variable
const var3 = "something";

console.log(var1);

function funcA(a, b, c){
    console.log("test");
    // does something
}

console.log(funcA);
var1 = funcA;
// loosely typed - meaning, we never have to declare a type ourselves

console.log(document);

/**
 * I'd like to create a site where I have a text box where I can input some grocery name,
 * a button to add the grocery, and when I add it, I want it to appear on the site
 * 
 * food for thought: eventually, we're going to be posting / getting data from an API
 * and using the frontend as our tool for interacting with the API.
 */

// get an input box
let input = document.getElementById("input");
// get a button
let button = document.getElementById("button");
// tell JS that when the button is clicked, we should add the grocery
let groceries = document.getElementById("groceries");
button.onclick = addGrocery;
// somewhere to store groceries
let groceriesArray = [];
// somewhere to hold the code to add a grocery
function addGrocery(){
    console.log("adding a grocery....");
    console.log(input);
    console.log(input.value);

    // push the name of the grocery to my groceries array...
    groceriesArray.push(input.value);

    refreshList();

}
// function to refresh the site by appending all the items of the array to the site
function refreshList(){
    // reset the contents of the list prior to adding the elements
    groceries.innerHTML = "";
    for(let i = 0; i < groceriesArray.length; i++){
        let item = document.createElement("p");
        item.innerText = groceriesArray[i];
        groceries.appendChild(item);
        console.log(document);
    }
}
/**
 * later on, instead of saving my groceries to an array, I'm going to be POSTing them to my backend
 * instead of append my elements from an array to the site, I'm first going to GET the array from my backend
 * and then append them to the site.
 */