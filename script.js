const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;

    // Update active tab
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Show correct section
    contents.forEach(c => {
      c.classList.toggle('active', c.id === target);
    });
  });
});
