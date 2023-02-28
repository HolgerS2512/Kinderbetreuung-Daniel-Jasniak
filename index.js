window.addEventListener('load', function() {
    const target = document.querySelectorAll('a[href^="#"]');
    for (const item of target) {
        item.onclick = function (e) {
            const hash = this.getAttribute("href");
            const elem = document.getElementById(hash.replace("#",""));
            elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
            e.preventDefault();
        }
    }
});