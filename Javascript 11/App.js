// function one() {
//     return 1; 
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three(); 


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed !");
        }, delay);
    });
 }

changeColor("red", 1000)
.then(()=> {
    console.log("red color was changed !");
    return changeColor("orange", 1000);
})
.then(()=> {
    console.log("orange color changed !");
    return changeColor("green", 1000);
})
.then(()=> {
    console.log("green color changed !");
    return changeColor("blue", 1000);
})
.then(()=> {
    console.log("blue color changed");
})


// changeColor("red", 1000, () => {
//     changeColor("orange", 1000,  ()=> {
//         changeColor("pink", 1000, () => {
//             changeColor("purple", 1000);
//         });
//     } );
// });

// callback nesting === Calllback hell 

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb(
//     "apna collage",
//     () => {
//         console.log(" sucess 1 : your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("sucess 2 : data 2 saved");
//                 savetoDb(
//                     "prasaaad",
//                     () => {
//                         console.log("sucess 3 : data 3 saved");
//                     },
//                     () => {
//                         console.log("faail 3");
//                     }
//                 )
//             }
//         )
//     },
//     () => {
//         console.log("weak connection");
//     }
// );

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("sucess : data was saved");
//         } else {
//             reject("failure : weak connection");
//         }
//     });
// }

// // promice chaining


// savetoDb("apna collage")
//   .then((result) => {
//     console.log("data 1 save");
//     console.log("result of promice",result);
//     return savetoDb("hello world");
//     })
//     .then((result) => {
//         console.log("data2 save");
//         console.log("result of promice", result);
//         return savetoDb("prasad");
//     })
//     .then((result) => {
//         console.log("data 3 save");
//         console.log("result of promice", result);
//     })
//      .catch((error) => {
//     console.log("promice was rejected");
//     console.log(error);
//   });