// ปุ่ม Say Hello
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: ปุ่ม Toggle Theme
const themeBtn = document.querySelector('#themeBtn');

themeBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
    themeBtn.textContent = '🌙 Switch Theme';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️ Light Mode';
  }
});
