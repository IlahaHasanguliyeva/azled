import { indoorProducts, outdoorProducts } from "./data.js";

// Combine both arrays
const allProducts = [...indoorProducts, ...outdoorProducts];

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const product = allProducts.find((p) => p.id === id);

if (product) {
  document.getElementById("title").textContent = product.title;
  document.getElementById("img").src = product.img;
  document.getElementById("excerpt").textContent = product.excerpt;
  // RENDER BULLETED LIST
  const list = document.getElementById("conditions");
  list.innerHTML = ""; // clear

  product.conditions.forEach((condition) => {
    const li = document.createElement("li");
    li.textContent = condition;
    list.appendChild(li);
  });
} else {
  document.body.innerHTML =
    '<h2 style="text-align:center;">Product not found</h2>';
}
