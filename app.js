// A JavaScript playground that goes back to basics. Let's not worry about x framework for now.
// Spend quality time on the principles and good things will happen.

// Example 1 - Event Handling
// Event listeners take two parameters: (event, function)
// A full list of DOM elements can be found here: https://developer.mozilla.org/en-US/docs/Web/Events
// .innerHTML - changes the content of an HTML element

// An example of a simple message
//document.getElementById("stuff").addEventListener("click", function(){
//    document.getElementById("message").innerHTML = "What's up guys!";
//});

// How about with an HTML structure?
// document.getElementById("stuff").addEventListener("click", function(){
//     document.getElementById("message").innerHTML = "<button>New Button</button>";
// });

// However instead of getElement we can create it before hand.
var x = document.createElement("button");
// We can give it attributes like id with .setAttribute().
x.setAttribute("id", "hello");
// View it in the body with appendChild().
document.body.appendChild(x);

// Can we write the button's text dynamically?
y = document.getElementById("hello");
y.innerHTML = 'Happy Holidays!';




