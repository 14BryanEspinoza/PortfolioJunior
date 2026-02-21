document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio Junior inicializado correctamente.');

  // --- Const ---
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const mobileDarkIcon = document.getElementById(
    'mobile-theme-toggle-dark-icon'
  );
  const mobileLightIcon = document.getElementById(
    'mobile-theme-toggle-light-icon'
  );

  // --- Efecto de scroll en el navbar ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('glass-navbar', 'shadow-sm');
      navbar.classList.remove('border-transparent');
    } else {
      navbar.classList.remove('glass-navbar', 'shadow-sm');
      navbar.classList.add('border-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // --- Menú móvil ---
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded =
      mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  });

  // Cerrar el menú móvil al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Botón de tema ---
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      darkIcon?.classList.add('hidden');
      lightIcon?.classList.remove('hidden');
      mobileDarkIcon?.classList.add('hidden');
      mobileLightIcon?.classList.remove('hidden');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      darkIcon?.classList.remove('hidden');
      lightIcon?.classList.add('hidden');
      mobileDarkIcon?.classList.remove('hidden');
      mobileLightIcon?.classList.add('hidden');
      localStorage.setItem('color-theme', 'light');
    }
  };

  // Comprobar tema inicial
  const savedTheme =
    localStorage.getItem('color-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');
  applyTheme(savedTheme);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'light'
      : 'dark';
    applyTheme(currentTheme);
  };

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle)
    mobileThemeToggle.addEventListener('click', toggleTheme);
});
