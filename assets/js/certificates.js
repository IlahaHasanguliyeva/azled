// certificates.js — FULL FIXED VERSION
document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------
  // 1. RENDER CERTIFICATES
  // -------------------------------------------------
  const certificates = [
    "./assets/images/certificates/IMG_8547.avif",
    "./assets/images/certificates/IMG_8548.avif",
    "./assets/images/certificates/IMG_8549.avif",
    "./assets/images/certificates/IMG_8551.avif",
    "./assets/images/certificates/IMG_8552.avif",
    "./assets/images/certificates/IMG_8553.avif",
    "./assets/images/certificates/IMG_8554.avif",
    "./assets/images/certificates/IMG_8555.avif",
    "./assets/images/certificates/IMG_8556.avif",
    "./assets/images/certificates/IMG_8557.avif",
  ];

  const cardsContainer = document.getElementById("certificatesCards");
  if (!cardsContainer) {
    console.error("#certificatesCards not found!");
    return;
  }

  certificates.forEach((src) => {
    const cardHTML = `
          <div class="card">
          <a href="javascript:void(0)" class="img" data-src="${src}">
            <img src="${src}" class="gallery-image" alt="Sertifikat">
          </a>
        </div>
    `;
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // -------------------------------------------------
  // 2. FULLSCREEN OVERLAY (Event Delegation)
  // -------------------------------------------------
  const overlay = document.querySelector(".fullscreen-overlay");
  const fullscreenImage = document.getElementById("fullscreenImage");
  const closeButton = document.querySelector(".close-button");

  if (!overlay || !fullscreenImage || !closeButton) return;

  cardsContainer.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery-image");
    if (!img) return;

    fullscreenImage.src = img.src;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent scroll
  });

  const closeOverlay = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === closeButton) {
      closeOverlay();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeOverlay();
    }
  });
});
