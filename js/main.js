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
// CTA Button Pulse Animation
// -----------------------------
window.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.classList.add('pulse');
    setTimeout(() => { ctaButton.classList.remove('pulse'); }, 3000);
  }
});