document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  // Toggle the 'menu-open' class on click
  menuToggle.addEventListener('click', function () {
      menu.classList.toggle('menu-open');
  });
});
