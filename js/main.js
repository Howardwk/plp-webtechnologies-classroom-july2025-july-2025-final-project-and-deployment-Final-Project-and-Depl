// Set the current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearEls = document.querySelectorAll('#year');
  const now = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = now;
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', function() {
    const expanded = nav.classList.toggle('open');
    // you might want to also toggle aria-expanded
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
  });
}

// Basic form validation on contact page
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');
      let valid = true;
      // simple required checks
      [name, email, message].forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'red';
          valid = false;
        } else {
          field.style.borderColor = '#ccc';
        }
      });
      // email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailPattern.test(email.value.trim())) {
        email.style.borderColor = 'red';
        valid = false;
      }
      if (!valid) {
        event.preventDefault();
        alert('Please fill in all required fields correctly.');
      }
    });
  }
});
