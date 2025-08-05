
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