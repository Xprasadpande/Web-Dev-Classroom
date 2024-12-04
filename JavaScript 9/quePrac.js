// Create a new input and button element on the page using JavaScript only.
// Set the text of button to“Clickme”;


// Ans 1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


//Add following attributes to the element:-
//Change place holder value of input to“username”- Change the id of button to“btn”


button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Access the btn using the querySelector and button id. Change the button background
//colort oblue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Create an h1 element on the page and set its text to “DOMPractice” underlined.
//Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOMPractice</u>";
document.querySelector("body").append(h1);

// Create a p tag on the page and set its text to “ApnaCollegeDeltaPractice”, 
//where Delta is bold.


let p = document.createElement("p");
p.innerHTML = "Apna collage <b>Delta</b> practice";
document.querySelector("body").append(p); 