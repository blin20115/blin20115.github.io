// Tab switching
const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    contents.forEach(c => {
      c.classList.toggle('active', c.id === target);
    });
  });
});

// Light/Dark mode toggle
const toggleBtn = document.getElementById('mode-toggle');

toggleBtn.addEventListener('click', () => {
  // Toggle dark class on body
  document.body.classList.toggle('dark');

  // Change the emoji
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
