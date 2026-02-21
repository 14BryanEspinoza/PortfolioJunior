/**
 * theme.js
 * Gestión del tema (Modo Oscuro/Claro)
 */

export const initTheme = () => {
  // Constantes
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  // Constantes de Iconos
  const icons = {
    dark: document.getElementById('theme-toggle-dark-icon'),
    light: document.getElementById('theme-toggle-light-icon'),
    mobileDark: document.getElementById('mobile-theme-toggle-dark-icon'),
    mobileLight: document.getElementById('mobile-theme-toggle-light-icon'),
  };

  // Const Apply Theme
  const applyTheme = (theme) => {
    // Si el tema es oscuro
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      icons.dark?.classList.add('hidden');
      icons.light?.classList.remove('hidden');
      icons.mobileDark?.classList.add('hidden');
      icons.mobileLight?.classList.remove('hidden');
      localStorage.setItem('color-theme', 'dark');
    } else {
      // Si el tema es claro
      document.documentElement.classList.remove('dark');
      icons.dark?.classList.remove('hidden');
      icons.light?.classList.add('hidden');
      icons.mobileDark?.classList.remove('hidden');
      icons.mobileLight?.classList.add('hidden');
      localStorage.setItem('color-theme', 'light');
    }
  };

  // Const Toggle Theme
  const toggleTheme = () => {
    // Alternar el tema
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'light'
      : 'dark';
    applyTheme(currentTheme);
  };

  // Const Saved Theme
  const savedTheme =
    // Obtener el tema guardado
    localStorage.getItem('color-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');

  applyTheme(savedTheme);

  // Si el tema es oscuro, mostrar el icono oscuro
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle)
    mobileThemeToggle.addEventListener('click', toggleTheme);
};
