var animacionActiva = false;

document.getElementById('palanca').addEventListener('click', function() {
    var body = document.body;
    var espacio = document.getElementById('espacio');

    if (!animacionActiva) {
        // Inicia la animación
        animacionActiva = true;
        body.classList.add('activo');
        espacio.classList.add('activo');
    } else {
        // Termina la animación
        animacionActiva = false;
        body.classList.add('flash');
        setTimeout(function() {
            body.classList.remove('activo', 'flash');
            espacio.classList.remove('activo');
        }, 100);
    }
});