// on cible les nav
const navLinks = document.querySelectorAll(".nav");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    // on ajoute la classe 'active' au click
    link.classList.add("active");
  });
});


// on active sur la nav
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav a, .nav-link'); 
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });


  const swiper = new Swiper('.portfolio-Swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      300:  { slidesPerView: 2, spaceBetween: 16 },
      768:  { slidesPerView: 2, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
}); 

 