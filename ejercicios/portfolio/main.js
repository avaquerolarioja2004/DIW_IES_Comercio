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
    dotX = e.clientX-2;
    dotY = e.clientY-2;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
});

function animateCursor() {
    cursorX += (((dotX-15) - cursorX) * 0.1);
    cursorY += ((dotY-15) - cursorY) * 0.1;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
}

animateCursor();

document.addEventListener('click', () => {
    cursor.classList.add('click');
    cursor.classList.add('enlarged');
    setTimeout(() => {
        cursor.classList.remove('click');
        cursor.classList.remove('enlarged');
    }, 150);
});

document.querySelectorAll('a, button, input, textarea, .card').forEach((el) => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add('enlarged');
    });
    el.addEventListener('mouseout', () => {
        cursor.classList.remove('enlarged');
    });
});

const updateCursorStyle = () => {
    if (document.body.classList.contains('dark-mode')) {
        cursor.classList.add('dark-mode');
    } else {
        cursor.classList.remove('dark-mode');
    }
};

document.getElementById('darkModeToggle').addEventListener('change', updateCursorStyle);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateCursorStyle);

updateCursorStyle();
