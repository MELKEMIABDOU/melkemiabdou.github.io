const progress = document.querySelector('.scroll-progress span');

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(value, 100)}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
