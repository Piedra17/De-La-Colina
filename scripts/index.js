document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    let previousIndex = 0;

function updateCarousel(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    items.forEach((item, i) => {
        item.classList.remove('active', 'left', 'right');
        if (i === index) {
            item.classList.add('active');

            // Detectar dirección de movimiento
            if (index > previousIndex || (previousIndex === items.length - 1 && index === 0)) {
                item.classList.add('right'); // Viene desde la derecha
            } else {
                item.classList.add('left'); // Viene desde la izquierda
            }
        }
    });

    previousIndex = index;
}


    // Flechas
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(currentIndex);
    });

    // Dots
    dots.forEach((dot, index) => {
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Inicializa
    updateCarousel(currentIndex);

    // Touch para móviles
    if (window.innerWidth <= 768) {
        let startX = 0;
        let isDragging = false;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const moveX = e.touches[0].clientX;
            const diff = startX - moveX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    currentIndex = (currentIndex + 1) % items.length;
                } else {
                    currentIndex = (currentIndex - 1 + items.length) % items.length;
                }
                updateCarousel(currentIndex);
                isDragging = false;
            }
        });

        carousel.addEventListener('touchend', () => {
            isDragging = false;
        });
    }
});



// Mostrar botón solo cuando el usuario ha bajado del banner
window.addEventListener("scroll", function () {
    const boton = document.getElementById("boton-arriba");
    const banner = document.getElementById("banner");
    const bannerBottom = banner.offsetTop + banner.offsetHeight;

    if (window.scrollY > bannerBottom) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
});

// Scroll suave al hacer clic
document.getElementById("boton-arriba").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("nav").scrollIntoView({
        behavior: "smooth"
    });
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




// Codigo para los formularios
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-contacto");
    const button = document.getElementById("enviar");
    const inputs = form.querySelectorAll("input, select, textarea"); // Incluyo textarea aquí

    // Función para validar el formulario y habilitar/deshabilitar el botón
    function validarFormulario() {
        let esValido = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                esValido = false;
            }
        });

        if (esValido) {
            button.disabled = false;
            button.classList.add("enabled");
        } else {
            button.disabled = true;
            button.classList.remove("enabled");
        }
    }

    // Agregar validación en tiempo real a inputs, selects y textarea
    inputs.forEach(input => {
        input.addEventListener("input", validarFormulario);
        input.addEventListener("change", validarFormulario);
    });

    // Contador de caracteres para el textarea
    const textarea = document.getElementById("mensaje");
    const contador = document.getElementById("contador-caracteres");

    textarea.addEventListener("input", () => {
        contador.textContent = `${textarea.value.length} / 250`;
    });

    // Evento al hacer clic en "Enviar"
    button.addEventListener("click", function (e) {
        e.preventDefault(); // Detiene el envío normal

        if (form.checkValidity()) {
            // Mostrar mensaje de éxito con SweetAlert
            Swal.fire({
                title: '¡Formulario enviado!',
                text: 'Tu información fue enviada con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                // Redirigir después de aceptar
                window.location.href = "index.html";
            });
        } else {
            // Mostrar validación del navegador
            form.reportValidity();
        }
    });

    // Ejecutar validación inicial para establecer estado correcto del botón
    validarFormulario();
});


//pausa del carrucel
  const track = document.querySelector('.carousel-track');
  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });

