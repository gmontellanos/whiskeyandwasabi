// -----------------------------
// Packages Fade-In on Scroll
// -----------------------------
const packages = document.querySelectorAll('.package');

function checkPackages() {
  const triggerBottom = window.innerHeight * 0.9;
  packages.forEach(pkg => {
    const boxTop = pkg.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      pkg.classList.add('visible');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  checkPackages();
});
window.addEventListener('scroll', checkPackages);

// -----------------------------
// CTA Button Pulse Animation (ALL buttons)
// -----------------------------
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cta-button');

  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add('pulse');

      btn.addEventListener(
        'animationend',
        () => {
          btn.classList.remove('pulse');
        },
        { once: true }
      );
    }, index * 250);
  });
});

// -----------------------------
// Mobile Nav Toggle (Hamburger)
// -----------------------------
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});