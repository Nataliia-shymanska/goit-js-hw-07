function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.querySelector(".color");
const btnElem = document.querySelector(".change-color");
btnElem.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  colorEl.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
