//parallax de cafeteria
    const elements = document.querySelectorAll('.parallax');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
    //menu con touche 
const menuButton = document.querySelector('.menu-btn');
const ulMenu = document.querySelector('.opciones');
const icon = menuButton.querySelector('i');

menuButton.addEventListener('click', () => {
    ulMenu.classList.toggle('active');

    if (ulMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times', 'animar-icono'); // Agrega animación
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        icon.classList.remove('animar-icono'); // Remueve animación al cerrar
    }
});
