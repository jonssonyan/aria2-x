const { shell } = require('electron');
window.onload = () => {
    let aLink = document.getElementById('aLink');
    aLink.onclick = function (e) {
        // 阻止默认事件
        e.preventDefault();
        let aHref = this.getAttribute('href');
        // 通过 shell 打开链接
        shell.openExternal(aHref);
    }
}
