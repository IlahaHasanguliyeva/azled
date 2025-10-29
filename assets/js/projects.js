import { projects } from "./project_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".projects-grid");
  if (!grid) return;

  projects.forEach((project) => {
    const card = document.createElement("a");
    card.href = `project_detail.html?id=${project.id}`;
    card.className = "project-card";

    card.innerHTML = `
      <img
        src="${project.thumb}"
        alt="${project.title}"
        loading="lazy"
      />
      <div class="card-overlay">
        <h3>${project.title}</h3>
      </div>
    `;

    grid.appendChild(card);
  });
});
