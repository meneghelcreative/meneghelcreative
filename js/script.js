// Meneghel Creative — script mínimo, sem animações complexas

document.addEventListener("DOMContentLoaded", () => {
  // Ano dinâmico no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Animação de entrada da onda (surge da esquerda, mantém sempre a forma da onda)
  const waveSvg = document.querySelector(".hero-wave-svg");
  if (waveSvg) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        waveSvg.classList.add("is-in-view");
      });
    });
  }

  // Menu mobile
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
