// let btn = document.querySelector("button");

// btn.onclick = function () {
//     alert("Button was click");
// }

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("Dont touch me !!!");
//     }
// }

// function sayHello() {
//      alert("fuck off !!!")
// }

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     //btn.addEventListener("click", sayHello);
//     btn.addEventListener("dblclick", sayBye);
//     btn.addEventListener("dblclick", function() {
//         console.log("WHy you touch me::")
//     });
// }

// // function sayHello() {
// //     alert("hola !!!!")
// // }
// function sayBye() {
//     alert("fuck you !!!")
// }

// let pook = document.querySelector("h3");

// pook.addEventListener("mouseenter", function() {
//     console.log("heyyy poookieee");
// });

// let h4 = document.querySelector("h4");
// let p = document.querySelector("p");
// let btnz = document.querySelector("button");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// h4.addEventListener("click", changeColor);
// btnz.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h4.addEventListener("click", changeColor)

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("key= ", event.key);
//     console.log("key is pressed");
//     //alert("dont type to much");
// })



// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("form submitted");
// }); 

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form);

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

});