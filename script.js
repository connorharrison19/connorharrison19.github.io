// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));

// Background dropdown
const dropdown = document.querySelector('.nav-dropdown');
const dropdownBtn = document.querySelector('.nav-dropdown-btn');

if (dropdownBtn) {
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    dropdownBtn.setAttribute('aria-expanded', isOpen);
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  if (dropdown) {
    dropdown.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', false);
  }
});

// Close dropdown when a dropdown link is clicked
document.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    dropdown.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', false);
  });
});
