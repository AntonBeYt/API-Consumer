const picUrl = "https://api.thecatapi.com/v1/images/search";
const factUrl = "https://meowfacts.herokuapp.com/";
const imgWrapper = document.getElementById("img-wrapper");
const factWrapper = document.getElementById("fact-wrapper");
//Old code:
// const catImg = async () => {
//   response = await fetch(picUrl);
//   imgSrc = await response.json();
//   console.log(imgSrc);
//   const img = document.createElement("img");
//   img.src = imgSrc[0]["url"];
//   img.classList.add("sizing");
//   imgWrapper.appendChild(img);
// };
// const catFact = async () => {
//   response = await fetch(factUrl);
//   data = await response.json();
//   console.log(data);
//   const fact = document.createElement("p");
//   fact.innerText = data.data;
//   fact.classList.add("sizing");
//   factWrapper.appendChild(fact);
// };
const catImg = async () => {
  response = await fetch(picUrl);
  imgSrc = await response.json();
  document.getElementById("cat-img").setAttribute("src", imgSrc[0]["url"]);
};
const catFact = async () => {
  response = await fetch(factUrl);
  data = await response.json();
  const fact = document.querySelector("#cat-fact");
  fact.classList.add("sizing");
  fact.textContent = data.data;
};

function getCat() {
  catImg();
  catFact();
}

const catBtn = document.getElementById("get-cat");
catBtn.addEventListener("click", () => {
  getCat();
});
