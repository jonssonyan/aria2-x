window.onload = () => {
    const {shell} = require('electron');
    const links = document.querySelectorAll('#aLink');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const url = link.getAttribute('href');
            e.preventDefault();
            shell.openExternal(url);
        });
    });
}
