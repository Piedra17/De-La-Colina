document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function updateCarousel(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
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
        dot.setAttribute('data-index', index); // Por si acaso
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    updateCarousel(currentIndex); // Inicializa

    // TOUCH (solo si pantalla es 768px o menor)
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
                    // Desliza a la izquierda
                    currentIndex = (currentIndex + 1) % items.length;
                } else {
                    // Desliza a la derecha
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



//FUNCION PARA MOVER A LA PAGINA DE INICIO CUANDO SE LE DA AL BOTON ENVIAR