document.getElementById('palanca').addEventListener('click', function() {
    document.getElementById('espacio').classList.add('hiperespacio');
    setTimeout(function() {
        document.getElementById('espacio').classList.remove('hiperespacio');
    }, 10000);
});