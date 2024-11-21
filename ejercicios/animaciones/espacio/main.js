document.getElementById('palanca_hiperespacio').addEventListener('click', function() {
    document.getElementById('espacio').classList.add('hiperespacio');
    setTimeout(function() {
        document.getElementById('espacio').classList.remove('hiperespacio');
    }, 3000); // Duración de la animación de hiperespacio
});