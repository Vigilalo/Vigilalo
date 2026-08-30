// ========================================
// VALIDACIÓN DEL FORMULARIO
// ========================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Obtener los valores ingresados
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const resultado = document.getElementById("resultado");

    // Expresión para comprobar el formato del correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // ========================================
    // VALIDACIÓN DE CAMPOS
    // ========================================

    if (nombre === "") {

        resultado.textContent = "Por favor, ingresa tu nombre y apellido.";
        return;
    }

    if (correo === "") {

        resultado.textContent = "Por favor, ingresa tu correo electrónico.";
        return;
    }

    if (!formatoCorreo.test(correo)) {

        resultado.textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }

    if (mensaje === "") {

        resultado.textContent = "Por favor, escribe un mensaje.";
        return;
    }


    // ========================================
    // MENSAJE DE ÉXITO
    // ========================================

    resultado.textContent =
        "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo.";

    // Limpiar formulario
    formulario.reset();

});


// ========================================
// MODO OSCURO
// ========================================

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function() {

    // Activar o desactivar modo oscuro
    document.body.classList.toggle("oscuro");

    // Cambiar el icono del botón
    if (document.body.classList.contains("oscuro")) {

        modoBtn.textContent = "☀️";

    } else {

        modoBtn.textContent = "🌙";

    }

});
