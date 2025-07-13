// Navbar Toggle for Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links ul');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  mobileMenu.classList.toggle('active');
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});
