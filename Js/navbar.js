/**
 * navbar.js
 * Gestión de interacciones del Navbar y Menú Móvil
 */

export const initNavbar = () => {
  // Constantes
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Efecto de scroll
  const handleScroll = () => {
    // Si el scroll es mayor a 20px, agregar clases
    if (window.scrollY > 20) {
      navbar.classList.add('glass-navbar', 'shadow-sm');
      navbar.classList.remove('border-transparent');
    } else {
      // Si el scroll es menor a 20px, remover clases
      navbar.classList.remove('glass-navbar', 'shadow-sm');
      navbar.classList.add('border-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Chequeo inicial

  // Menú móvil
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      // Alternar el atributo aria-expanded
      const isExpanded =
        mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }
};
