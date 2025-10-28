// main.js
import { indoorProducts, outdoorProducts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const indoorContainer = document.getElementById("indoorContainer");
  const outdoorContainer = document.getElementById("outdoorContainer");

  // Render Indoor
  indoorProducts.forEach((product) => {
    const html = createCard(product);
    indoorContainer.insertAdjacentHTML("beforeend", html);
  });

  // Render Outdoor
  outdoorProducts.forEach((product) => {
    const html = createCard(product);
    outdoorContainer.insertAdjacentHTML("beforeend", html);
  });
});

// Reusable card template
function createCard(product) {
  return `
    <div class="product-card">
      <a href="product_detail.html?id=${product.id}">
        <img src="${product.img}" alt="${product.title}" />
      </a>
      <div class="info">
        <h3><a href="product_detail.html?id=${product.id}">${product.title}</a></h3>
        <p class="excerpt">${product.excerpt}</p>
        <a href="product_detail.html?id=${product.id}" class="see-more-btn">
          Daha ətraflı
        </a>
      </div>
    </div>
  `;
}
