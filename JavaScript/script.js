const menuIcon = document.getElementById('menu-icono');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuIcon.classList.remove('active');
    });
  });