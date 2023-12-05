document.addEventListener('DOMContentLoaded', function() {
    const modeSwitchButton = document.getElementById('mode-switch');
    const body = document.body;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        enableDarkMode();
    } else {
        // hvis det ikke er mørk modus, vis innholdet ved å fjerne 'hidden-content' klassen
        body.classList.remove('hidden-content');
    }

    modeSwitchButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        modeSwitchButton.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'true');
        // vis innhold etter å ha aktivert mørk-modus
        body.classList.remove('hidden-content');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        modeSwitchButton.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'false');
        // vis innhold etter å ha aktivert lys-modus
        body.classList.remove('hidden-content');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            header.style.top = '0';
        } else {
            header.style.top = '-100px'; // Adjust this value as needed for the header to disappear
        }
        prevScrollpos = currentScrollPos;
    };
});
