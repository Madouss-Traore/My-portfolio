document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelectorAll('#one-page-menu .nav');

  // ---------- MENU BURGER ----------
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      body.classList.toggle('nav-active');
    });
  }


  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      body.classList.remove('nav-active');
    });
  });

  // ---------- SWIPER PORTFOLIO ----------
  const swiperContainer = document.querySelector('.portfolio-Swiper');
  if (swiperContainer) {
    const swiper = new Swiper('.portfolio-Swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: {           // mobile
          slidesPerView: 1,
          spaceBetween: 16
        },
        576: {        // tablette
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {        // desktop
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }
});
