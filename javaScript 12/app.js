//  async keyword

// async function greet() {
//     throw "some random error";
//     return "hello!";
// }

// greet()
// .then((result)=> {
//     console.log("promice was resolved");
//     console.log("result was : ", result);
// })
// .catch((err)=> {
//     console.log("result was : ", err);
// })

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

// color changing using async and await.

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promice reject");
      }

      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, delay);
  });
}
// erroe handling using try and catch
async function col() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("purple", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new num = ", a + 3);
}

// api

let JSONobj =
  '{"fact":"British cat owners spend roughly 550 million pounds yearly on cat food.","length":71}';

let validRes = JSON.parse(JSONobj);
console.log(validRes.fact);

let student = {
  name: "prasad",
  marks: 90,
};
