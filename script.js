// Fade-in on scroll
const sections = document.querySelectorAll('.section');
const reveal = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
};
window.addEventListener('scroll', reveal);
reveal(); // run on load
