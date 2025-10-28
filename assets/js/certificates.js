// zoom in certificates ---------
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImage = document.querySelector('#fullscreenImage');
    const closeButton = document.querySelector('.close-button');
  
  
    const images = document.querySelectorAll('.gallery-image');
    images.forEach((img) => {
      img.addEventListener('click', (e) => {
        e.preventDefault(); 
        fullscreenImage.src = img.src;
        overlay.classList.add('active'); 
      });
    });
  
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target === closeButton) {
        overlay.classList.remove('active'); 
      }
    });
  });


// Wait for HTML to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------
    // 1. CERTIFICATES GALLERY
    // -------------------------------------------------
    const certificates = [
      "./assets/images/certificates/IMG_8547.png",
      "./assets/images/certificates/IMG_8548.png",
      "./assets/images/certificates/IMG_8549.png",
      "./assets/images/certificates/IMG_8551.png",
      "./assets/images/certificates/IMG_8552.png",
      "./assets/images/certificates/IMG_8553.png",
      "./assets/images/certificates/IMG_8554.png",
      "./assets/images/certificates/IMG_8555.png",
      "./assets/images/certificates/IMG_8556.png",
      "./assets/images/certificates/IMG_8557.png"
    ];
  
    const cardsContainer = document.getElementById('certificatesCards');
  
    // Safety check
    if (!cardsContainer) {
      console.error("Element #certificatesCards not found!! Check HTML.");
      return;
    }
  
    certificates.forEach(src => {
      const cardHTML = `
        <div class="card">
          <a href="javascript:void(0)" class="img" data-src="${src}">
            <img src="${src}" class="gallery-image" alt="Sertifikat">
          </a>
        </div>
      `;
      cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
});
