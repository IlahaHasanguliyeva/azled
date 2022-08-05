    const nav = document.querySelector("nav");
    const header = document.querySelector("header")
    const a = document.querySelectorAll(".link")

    window.addEventListener('scroll', function() {
      const offset = window.pageYOffset;
      
      if(offset > 350)
        nav.classList.add('scroll')
      else 
        nav.classList.remove('scroll')
    });

    const icon = document.querySelector('.media-menu')
    const list = document.querySelector('.navbar')

    icon.addEventListener('click', ()=> {
      list.classList.toggle('active');
    });

AOS.init();