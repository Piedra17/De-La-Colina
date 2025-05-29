const menuButton = document.querySelector('.menu');
const ulMenu = document.querySelector('ul');
const btnEnviar = document.querySelector('.button-formulario');

menuButton.addEventListener('click', () => {
    ulMenu.classList.toggle('active');
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
    let autoSlide = setInterval(nextSlide, 5000);

    // Agregar eventos a las flechas
    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, 5000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, 5000);
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


// esto es para deslizar en tamaño de tablet hacia abajo

const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let isDown = false;
let startX;
let scrollLeft;

function updateDots() {
    const scrollPosition = carousel.scrollLeft;
    const carouselWidth = carousel.offsetWidth;
    const totalItems = carousel.children.length;
    const itemWidth = carouselWidth / totalItems;
    const currentIndex = Math.round(scrollPosition / itemWidth);
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

if (window.innerWidth <= 1280) {
    // Activar deslizamiento solo si el ancho de la pantalla es 1280px o menos
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        updateDots();  // Actualiza los puntos después de detener el deslizamiento
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;  // Ajusta el factor de "caminar" si es necesario
        carousel.scrollLeft = scrollLeft - walk;
    });

    let touchStartX = 0;
    let touchStartScroll = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartScroll = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
        const touchMoveX = e.touches[0].clientX;
        const walk = (touchMoveX - touchStartX) * 2;  // Ajusta el factor de "caminar" si es necesario
        carousel.scrollLeft = touchStartScroll - walk;
    });

    carousel.addEventListener('touchend', () => {
        updateDots();  // Actualiza los puntos después de detener el deslizamiento
    });

    // Función para navegar al carrusel al hacer clic en los puntos
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            const targetItem = carousel.children[index];
            carousel.scrollTo({
                left: targetItem.offsetLeft,
                behavior: 'smooth'
            });
        });
    });
}

// Para actualizar los puntos de navegación al cargar la página
window.addEventListener('load', updateDots);




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







// Codigo para los formularios
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-contacto");
    const button = document.getElementById("enviar");
    const inputs = form.querySelectorAll("input, select");

    function validarFormulario() {
        let esValido = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                esValido = false;
            }
        });
    button.onclick = window.href = "index.html"
        if (esValido) {
            button.disabled = false;
            button.classList.add("enabled");
        } else {
            button.disabled = true;
            button.classList.remove("enabled");
        }
    }



    inputs.forEach(input => {
        input.addEventListener("input", validarFormulario);
        input.addEventListener("change", validarFormulario);
    });
});

//FUNCION PARA MOVER A LA PAGINA DE INICIO CUANDO SE LE DA AL BOTON ENVIAR