import { projects } from "./project_data.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const project = projects.find((p) => p.id === id);

  if (!project) {
    document.body.innerHTML =
      "<h1 style='text-align:center; padding:2rem;'>Project not found</h1>";
    return;
  }

  // Set title & desc (instant)
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-desc").textContent = project.description;

  // Build gallery with lazy loading
  const gallery = document.getElementById("gallery");
  project.images.forEach((src, index) => {
    const img = document.createElement("img");
    img.alt = `${project.title} - Image ${index + 1}`;
    img.dataset.src = src; // Real src in data-src (don't load yet)
    img.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjY2NjIiB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNsb3cgbG9hZGluZy4uLjwvdGV4dD48L3N2Zz4="; // Tiny SVG placeholder
    img.className = "lazy-img"; // For Observer
    img.loading = "lazy"; // Native lazy loading
    img.onclick = () => openLightbox(src); // Full image for lightbox
    gallery.appendChild(img);
  });

  // Init lazy loading observer
  initLazyLoading();
});

// Lazy Loading with Intersection Observer (loads when in viewport)
function initLazyLoading() {
  const images = document.querySelectorAll(".lazy-img");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Swap to real image
            img.classList.remove("lazy-img");
            img.classList.add("loaded");
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "0px 0px 100px 0px" }
    ); // Load 100px before visible

    images.forEach((img) => observer.observe(img));
  } else {
    // Fallback: Load all on DOM ready (for old browsers)
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.add("loaded");
    });
  }
}

// Lightbox (same as before, but preload for smoothness)
function openLightbox(src) {
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src; // Browser caches it if already lazy-loaded
  document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

// Event listeners (same)
document.getElementById("close-lightbox").onclick = closeLightbox;
document.getElementById("lightbox").onclick = (e) => {
  if (e.target === e.currentTarget) closeLightbox();
};
