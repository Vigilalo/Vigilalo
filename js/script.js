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

        resultado.className = "error";
        resultado.textContent = "Por favor, ingresa tu nombre y apellido.";
        return;
    }

    if (nombre.length < 3) {

        resultado.className = "error";
        resultado.textContent = "El nombre debe contener al menos 3 caracteres.";
        return;
    }

    if (correo === "") {

        resultado.className = "error";
        resultado.textContent = "Por favor, ingresa tu correo electrónico.";
        return;
    }

    if (!formatoCorreo.test(correo)) {

        resultado.className = "error";
        resultado.textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }

    if (mensaje === "") {

        resultado.className = "error";
        resultado.textContent = "Por favor, escribe un mensaje.";
        return;
    }

    if (mensaje.length < 10) {

        resultado.className = "error";
        resultado.textContent = "El mensaje debe contener al menos 10 caracteres.";
        return;
    }


    // ========================================
    // MENSAJE DE ÉXITO
    // ========================================

    resultado.className = "exito";
    resultado.textContent =
        "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo.";

    // Limpiar formulario
    formulario.reset();

});


// ========================================
// MODO OSCURO
// ========================================

const modoBtn = document.getElementById("modoBtn");

if (localStorage.getItem("modoOscuro") === "activo") {

    document.body.classList.add("oscuro");
    modoBtn.textContent = "☀️";

} else {

    modoBtn.textContent = "🌙";

}

modoBtn.addEventListener("click", function() {

    // Activar o desactivar modo oscuro
    document.body.classList.toggle("oscuro");

    // Cambiar el icono del botón
    if (document.body.classList.contains("oscuro")) {

        modoBtn.textContent = "☀️";
        localStorage.setItem("modoOscuro", "activo");

    } else {

        modoBtn.textContent = "🌙";
        localStorage.setItem("modoOscuro", "inactivo");

    }

});
