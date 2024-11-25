var animacionActiva = false;

document.getElementById('palanca').addEventListener('click', function() {
    var body = document.body;
    var elementos = document.querySelectorAll('#espacio > div');

    if (!animacionActiva) {
        // Inicia la animación
        animacionActiva = true;
        body.classList.add('activo');
        elementos.forEach(function(elemento) {
            elemento.style.visibility = 'hidden';
        });
    } else {
        // Termina la animación
        animacionActiva = false;
        body.classList.add('flash');
        setTimeout(function() {
            body.classList.remove('activo', 'flash');
            elementos.forEach(function(elemento) {
                elemento.style.visibility = 'visible';
            });
        }, 1000);
    }
});