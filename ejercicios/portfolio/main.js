function applyDarkMode() {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkModeSetting = localStorage.getItem('darkMode');

    if (darkModeSetting === 'enabled' || (darkModeSetting === null && darkModePreference)) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('darkModeToggle').checked = false;
    }
}

applyDarkMode();

document.getElementById('darkModeToggle').addEventListener('change', function () {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (e.matches) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('darkModeToggle').checked = false;
        localStorage.setItem('darkMode', 'disabled');
    }
});

const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');

let cursorX = 0, cursorY = 0;
let dotX = 0, dotY = 0;

document.addEventListener('mousemove', (e) => {
    if (!isMobile()) {
        dotX = e.clientX;
        dotY = e.clientY;
        cursorDot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
    }
});

function animateCursor() {
    //ToDo
    //compruebo si es grande o pequeña para ajustar el tamaño
    if (!isMobile()) {
        cursorX += (((dotX - 15) - cursorX) * 0.1);
        cursorY += ((dotY - 15) - cursorY) * 0.1;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    requestAnimationFrame(animateCursor);
}

if(!isMobile()){
    animateCursor();
}


document.addEventListener('mousedown', () => {
    if (!isMobile()) {
        cursor.classList.add('enlarged');
    }
});

document.addEventListener('mouseup', () => {
    if (!isMobile()) {
        cursor.classList.remove('enlarged');
    }
});

document.querySelectorAll('a, button, input, textarea, .card').forEach((el) => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add('enlarged');
    });
    el.addEventListener('mouseout', () => {
        cursor.classList.remove('enlarged');
    });
});

document.querySelectorAll('a, button, input, textarea, .card').forEach((el) => {
    el.addEventListener('mouseover', () => {
        if (!isMobile()) {
            cursor.classList.add('enlarged');
        }
    });
    el.addEventListener('mouseout', () => {
        if (!isMobile()) {
            cursor.classList.remove('enlarged');
        }
    });
});

document.getElementById('darkModeToggle').addEventListener('change', updateCursorStyle);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateCursorStyle);

if(!isMobile()){
    updateCursorStyle();
}


function isMobile() {
    return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

function applyMobileStyles() {
    if (isMobile()) {
        document.body.classList.add('mobile');
    }
}

applyMobileStyles();
