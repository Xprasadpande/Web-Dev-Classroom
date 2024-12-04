// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", async () => {
//   let fact = await getF();
//   console.log(fact);
//   let p = document.querySelector("#fact");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getF(params) {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error - ", e);
//     return "No fact found";
//   }
// }

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click", async () => {
//   let link = await getImage();
//   let img = document.querySelector("#resl");
//   img.setAttribute("src", link);
//   console.log(link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     console.log("error - ", e);
//     return "/";
//   }
// }

let url3 = "http://universities.hipolabs.com/search?name=";

let country = "nepal";

async function getColleges() {
  try {
    let res = await axios.get(url3 + country);
    console.log(res);
  } catch (e) {
    console.log("error - ", e);
  }
}
