// A JavaScript playground that goes back to basics. Let's not worry about x framework for now.
// Spend quality time on the principles and good things will happen.

// Example 1 - Event Handling
// Event listeners take two parameters: (event, function)
// A full list of DOM elements can be found here: https://developer.mozilla.org/en-US/docs/Web/Events
// .innerHTML - changes the content of an HTML element

document.getElementById("stuff").addEventListener("click", function(){
    document.getElementById("message").innerHTML = "What's up guys!";
});
