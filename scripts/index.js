document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    // Función para cambiar la imagen activa
    function updateCarousel() {
        const offset = -currentIndex * 100; // Desplazamiento en porcentaje
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

        // Actualizar los puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Función para mover al siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length; 
        updateCarousel();
    }

    // Función para mover al slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        updateCarousel();
    }

    // Iniciar el carrusel con un intervalo automático
    let autoSlide = setInterval(nextSlide, 4000);

    // Agregar eventos a las flechas
    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide); 
        nextSlide();
        autoSlide = setInterval(nextSlide, 4000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide); 
        prevSlide();
        autoSlide = setInterval(nextSlide, 4000);
    });

    // Agregar eventos a los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});



function toggleInfo(index) {
    const infos = document.querySelectorAll('.info');
    
    infos.forEach((info, i) => {
        if (i === index) {
            info.classList.toggle('oculto');
        } else {
            info.classList.add('oculto');
        }
    });
}
