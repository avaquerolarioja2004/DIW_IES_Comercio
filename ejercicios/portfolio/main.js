function applyDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
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