let input = document.getElementById("input");
let button = document.getElementById("button");
let wordElement = document.getElementById("word");
let definitionElement = document.getElementById("definition");
// onclick restricts us to only having a single handler for an event - the eventlistener allows for multiple
 button.addEventListener("click", loadWordAPI);
/**
 * async designates this function as something that happens asynchronously - that means that other events may fire
 * and run functions while this one is waiting
 * 
 * await just forces the function to wait - this is waiting for a promise to resolve
 * 
 * a promise is a value that might exist in the future, but will take time to resolve
 */
async function loadWordAPI(){


    let httpresponse = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+input.value);
    // let httpresponse = await fetch("https://hub.dummyapis.com/delay?seconds=3");

    // have to await the conversion to json because HTTP response bodies dont come in instantly
    // they're a stream of data...
    let responseJSON = await httpresponse.json();
    console.log(responseJSON);

    wordElement.innerText = responseJSON[0].word;
    definitionElement.innerText = responseJSON[0].meanings[0].definitions[0].definition;
}
// javascript runs on a single thread - it can not ever do multithreading
// javascript needs to overcome this drawback through some clever architecture - 
// "event loop" - there is an internal loop in javascript that continously runs through the events that fire - 
// on top of that, when an operation in Javascript needs to wait and is "blocked" - eg a fetch request, other
// events may fire while that action is paused

/*
asynchrnonous programming with async/await
event loop
fetch api
*/
/*
javascript versioning
javascript versions refer to 'ECMAScript' - Or ES5, ES6, etc
ES6 introduced many of the JS features we use regularly - like using let & const instead of just var
(var exists, but doesn't include block scoping - instead, variables are "hoisted" to the top of the script regardless
of where they are)
also introduced alternative ways of writing functions (arrow function syntax), new ways of writing strings (template literals)
as well as the fetch API
*/
/*
    types like number, string, boolean, object, undefined, null, symbol, bigint
    typescript will introduce strong typing - it's a language that is built on top of javascript (superset of JS because
    it contains all the features and then some) - it works by actually converting itself to Javascript - the checking for
    these basic issues only happens during the transpilation process - transpilation is really similar to compilation

    transpiling is the conversion of one high-level language to another

    in order to this, we're also going to need node.js - it allows us to run javascript without being attached to an
    html file
*/