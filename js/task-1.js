const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");
let categoryCount = 0;
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul > li");
  let itemCount = items.length;
  console.log(`Kategoria: ${categoryName}, Liczba elementów: ${itemCount}`);
  categoryCount++;
});
console.log(`Liczba kategorii: ${categoryCount}`);
