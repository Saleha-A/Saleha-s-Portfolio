
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  function showSection(id) {
    sections.forEach(section => {
      section.style.display = section.id === id ? 'block' : 'none';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });

