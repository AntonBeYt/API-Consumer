const corporateUrl = "https://corporatebs-generator.sameerkumar.website/";
const catPicUrl = "https://api.thecatapi.com/v1/images/search";
const inspirationUrl = "https://api.quotable.io/random";
const catFactUrl = "https://meowfacts.herokuapp.com/";
const randPicUrl = "https://picsum.photos/600/400";
const imgWrapper = document.getElementById("img-wrapper");
const factWrapper = document.getElementById("fact-wrapper");
const text = document.querySelector("#fact");
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
  text.textContent = data.data;
};
const randQuote = async () => {
  response = await fetch(inspirationUrl);
  data = await response.json();
  text.textContent = data.content;
  const author = document.querySelector("#author");
  author.classList.add("author-styling");
  author.textContent = "- " + data.author;
};
const randBull = async () => {
  response = await fetch(corporateUrl);
  data = await response.json();
  text.textContent = data.phrase;
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
  catImg();
}
function getPhrase() {
  catImg();
  randBull();
  author.textContent = "";
}
const getBtn = document.getElementById("get-btn");
const exclam = [
  "Wow!",
  "Interesting!",
  "Amazing!",
  "Huh?",
  "Hmm..",
  "Good to know",
  "Cool!",
  "Radical!",
  "Tubular!",
  "Brilliant!",
  "Dang!",
  "Fabulous!",
  "Fantastic!",
  "Holy Mackerel!",
  "Marvelous!",
  "No Way!",
  "Swell!",
];
getBtn.addEventListener("click", () => {
  if (cat.checked) {
    getCat();
    getBtn.innerText = exclam[Math.floor(Math.random() * exclam.length)];
  }
  if (other.checked) {
    getOther();
    getBtn.innerText = exclam[Math.floor(Math.random() * exclam.length)];
  }
  if (bull.checked) {
    getPhrase();
    getBtn.innerText = exclam[Math.floor(Math.random() * exclam.length)];
  }
});
