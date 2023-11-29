//const corporateUrl = "https://corporatebs-generator.sameerkumar.website/";
const catPicUrl = "https://api.thecatapi.com/v1/images/search";
const inspirationUrl = "https://api.quotable.io/random";
const catFactUrl = "https://meowfacts.herokuapp.com/";
const randPicUrl = "https://picsum.photos/600/400";
const imgWrapper = document.getElementById("img-wrapper");
const factWrapper = document.getElementById("fact-wrapper");
//Old code:
// const catImg = async () => {
//   response = await fetch(catPicUrl);
//   imgSrc = await response.json();
//   console.log(imgSrc);
//   const img = document.createElement("img");
//   img.src = imgSrc[0]["url"];
//   img.classList.add("sizing");
//   imgWrapper.appendChild(img);
// };
// const catFact = async () => {
//   response = await fetch(catFactUrl);
//   data = await response.json();
//   console.log(data);
//   const fact = document.createElement("p");
//   fact.innerText = data.data;
//   fact.classList.add("sizing");
//   factWrapper.appendChild(fact);
// };
const catImg = async () => {
  response = await fetch(catPicUrl);
  imgSrc = await response.json();
  document.getElementById("img").setAttribute("src", imgSrc[0]["url"]);
};
const catFact = async () => {
  response = await fetch(catFactUrl);
  data = await response.json();
  const fact = document.querySelector("#fact");
  fact.classList.add("sizing");
  fact.textContent = data.data;
};
const randQuote = async () => {
  response = await fetch(inspirationUrl);
  data = await response.json();
  const quote = document.querySelector("#fact");
  quote.classList.add("sizing");
  quote.textContent = data.content;
  const author = document.querySelector("#author");
  author.classList.add("author-styling");
  author.textContent = "- " + data.author;
};
const randImg = () => {
  document.getElementById("img").setAttribute("src", randPicUrl);
};

function getCat() {
  catImg();
  catFact();
  author.textContent = "";
}
function getOther() {
  randQuote();
  randImg();
}
const cat = document.getElementById("cat");
const other = document.getElementById("other");
const getBtn = document.getElementById("get-btn");
getBtn.addEventListener("click", () => {
  getOther();
});

onload;
