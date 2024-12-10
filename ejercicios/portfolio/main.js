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