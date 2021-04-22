window.onload = () => {
    document.querySelectorAll('body > div.side-bar > a').forEach(el => {
        if (!document.querySelector('#' + el.innerHTML)) {
            el.className = "side-bar-item disabled"
        } else {
            el.href = '#' + el.innerHTML;
        }
    })
}