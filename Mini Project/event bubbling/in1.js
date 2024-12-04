let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

div.addEventListener("click", function() {
    console.log("Div was clicked");
});

ul.addEventListener("click", function(event)  {
    event.stopPropagation();  // to stop event bubbling
    console.log("Ul was clicked");
});
for(li of lis){  
li.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("li was clicked");
}); }