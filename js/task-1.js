const categoriesList = document.querySelector("#categories");
const listItems = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", listItems.length);
listItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("ul li");
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryItems.length);
});
