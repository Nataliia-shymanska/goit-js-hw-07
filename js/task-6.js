function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("#controls input[type=number]");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesContainerEL = document.getElementById("boxes");
createBtnEl.addEventListener("click", handleCreateButtonClick);
destroyBtnEl.addEventListener("click", handleDestroyButtonClick);
function handleCreateButtonClick() {
  const amount = +inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  }
}

function handleDestroyButtonClick() {
  destroyBoxes();
}
function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    const size = 30 + i * 10;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxesContainerEL.appendChild(element);
  }
}
function destroyBoxes() {
  while (boxesContainerEL.firstChild) {
    boxesContainerEL.removeChild(boxesContainerEL.firstChild);
  }
}
