var animacionActiva = false;

document.getElementById('palanca').addEventListener('click', function() {
    var body = document.body;
    var espacio = document.getElementById('espacio');
    var hyperspaceAudio = document.getElementById('hyperspaceAudio');
    var nyanCatAudio = document.getElementById('nyanCatAudio');
    var interstellarAudio = document.getElementById('interstellarAudio');
    hyperspaceAudio.currentTime = 0;
    if (!animacionActiva) {
        animacionActiva = true;
        body.classList.add('activo');
        espacio.classList.add('activo');
        espacio.style.animation = 'none';
        hyperspaceAudio.play();
        nyanCatAudio.pause();
        interstellarAudio.play();
    } else {
        animacionActiva = false;
        setTimeout(function() {
            body.classList.remove('activo');
            espacio.classList.remove('activo');
            espacio.style.animation = 'moveEspacio 25s linear infinite';
            hyperspaceAudio.play();
            interstellarAudio.pause();
            nyanCatAudio.play();
        }, 50);
    }
});

function playNyanCatMusic() {
    var audio = document.getElementById('nyanCatAudio');
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    playNyanCatMusic();
});