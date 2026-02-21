// Import Modules
import { initTheme } from './theme.js';
import { initNavbar } from './navbar.js';

// Inicializando Funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
});
