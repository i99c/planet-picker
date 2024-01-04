document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.planet').forEach(planet => {
        planet.addEventListener('mouseenter', function () {
            this.style.animation = 'rotate 10s linear infinite';
        });
        planet.addEventListener('mouseleave', function () {
            this.style.animation = '';
        });
    });
});
