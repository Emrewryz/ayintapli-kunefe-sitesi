// Mobil menü aç/kapa
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Bir linke tıklanınca menüyü kapat
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// Hero üzerinde süzülen fıstık tozu efekti
const dust = document.getElementById('dust');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (dust && !reduceMotion) {
  const specksCount = 22;
  for (let i = 0; i < specksCount; i++) {
    const speck = document.createElement('div');
    speck.className = 'speck';

    const size = 2 + Math.random() * 3;
    speck.style.width = `${size}px`;
    speck.style.height = `${size}px`;
    speck.style.left = `${Math.random() * 100}%`;
    speck.style.top = `${-10 - Math.random() * 20}vh`;
    speck.style.animationDuration = `${8 + Math.random() * 10}s`;
    speck.style.animationDelay = `${Math.random() * 10}s`;

    dust.appendChild(speck);
  }
}
