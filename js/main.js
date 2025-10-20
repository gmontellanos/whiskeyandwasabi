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

window.addEventListener('scroll', checkPackages);
window.addEventListener('load', checkPackages);