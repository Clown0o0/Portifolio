// scripts.js — Menu, formulário e tema escuro/claro
document.addEventListener('DOMContentLoaded', () => {
  // ========= Ano no rodapé =========
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ========= Menu mobile =========
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // ========= Fecha menu ao clicar fora (mobile) =========
  document.addEventListener('click', (e) => {
    if (!mainNav) return;
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      mainNav.classList.remove('open');
    }
  });

  // ========= Formulário de contato =========
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = '#dc2626';
        return;
      }

      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        feedback.textContent = 'E-mail inválido.';
        feedback.style.color = '#dc2626';
        return;
      }

      feedback.textContent = 'Enviando...';
      feedback.style.color = '#374151';

      // Simula envio
      setTimeout(() => {
        feedback.textContent = 'Mensagem enviada com sucesso! ✅';
        feedback.style.color = '#16a34a';
        form.reset();
      }, 800);
    });
  }

  // ========= Tema escuro / claro =========
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');

  // Aplica o tema salvo, se houver
  if (storedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    root.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙';
  }

  // Alterna tema ao clicar no botão
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });
  }
});