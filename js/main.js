document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const body = document.body;

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
    if (localStorage.getItem('theme') === 'dark') {
        toggle.checked = true;
        body.classList.add('dark-mode');
    } else {
        toggle.checked = false;
        body.classList.remove('dark-mode');
    }
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});