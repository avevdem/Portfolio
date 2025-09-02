const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show');
        }
    });
});
