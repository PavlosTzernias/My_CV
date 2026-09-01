document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.querySelector('.theme-icon').textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'dark');
    themeToggle.querySelector('.theme-icon').textContent = '🌙';
  }
});
