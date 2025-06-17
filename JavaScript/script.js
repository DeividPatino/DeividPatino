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

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock-time').textContent = `${hours}:${mins}:${secs}`;
}

setInterval(updateClock, 1000);
updateClock();