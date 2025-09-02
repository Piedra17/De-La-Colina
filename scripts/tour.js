document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.from-left, .from-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Ejecuta solo una vez
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const opciones = document.querySelector(".opciones");
    const overlay = document.getElementById("menuOverlay");

    menuBtn.addEventListener("click", function () {
        opciones.classList.toggle("active");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", function () {
        opciones.classList.remove("active");
        overlay.classList.remove("show");
    });
});


const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function focusCard(index) {
  cards.forEach(card => card.classList.remove('active'));
  cards[index].focus();
  cards[index].classList.add('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % cards.length;
    focusCard(currentIndex);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    focusCard(currentIndex);
  }
});
