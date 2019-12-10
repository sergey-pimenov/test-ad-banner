// Tiny hack for iOS
window.addEventListener("orientationchange", () => setTimeout(setVhUnit, 500));

function setVhUnit() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVhUnit();
