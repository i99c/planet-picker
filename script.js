document.addEventListener("DOMContentLoaded", function () {
    const gezegenler = document.querySelectorAll('.gezegen');
    const gezegenContainer = document.querySelector('.gezegenler');
    const sun = document.querySelector('.gezegen img[alt="Güneş"]');

    if (sun) {
        const containerRect = gezegenContainer.getBoundingClientRect();
        const sunRect = sun.getBoundingClientRect();

        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;

        const sunX = sunRect.left + sunRect.width / 2;
        const sunY = sunRect.top + sunRect.height / 2;

        const angleToSun = Math.atan2(sunY - centerY, sunX - centerX) * (180 / Math.PI);

        gezegenler.forEach((gezegen, index) => {
            const distance = 150 + index * 50;
            const rotationSpeed = 20 / distance;
            const planetAngle = angleToSun + (index * 30);

            gezegen.style.animation = `rotate-planet-${gezegen.getAttribute('alt')} ${rotationSpeed}s linear infinite, rotate-sun 20s linear infinite`;
            gezegen.style.transform = `rotate(${planetAngle}deg) translate(${distance}px)`;
        });
    } else {
        console.error('Güneş elementi bulunamadı!');
    }
});
