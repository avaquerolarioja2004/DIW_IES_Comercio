var animacionActiva = false;

document.getElementById('palanca').addEventListener('click', function() {
    var body = document.body;
    var espacio = document.getElementById('espacio');

    if (!animacionActiva) {
        // Inicia la animación
        animacionActiva = true;
        body.classList.add('activo');
        espacio.classList.add('activo');
        espacio.style.animation = 'none';
    } else {
        // Termina la animación
        animacionActiva = false;
        setTimeout(function() {
            body.classList.remove('activo');
            espacio.classList.remove('activo');
            espacio.style.animation = 'moveBackground 10s linear infinite';
        }, 50);
    }
});