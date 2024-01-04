// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Tüm gezegen resimlerini seç
    const planetImages = document.querySelectorAll('.ilk-content img');

    // Sonsuz dönen fonksiyonu tanımla
    const rotateForever = function (image) {
        let rotation = 0;

        // Sonsuz döngü
        const rotate = function () {
            rotation += 1; // Her çağrıda 1 derece artır

            // Döndürme işlemi
            image.style.transform = `rotate(${rotation}deg)`;

            // Bir sonraki frame için tekrar çağır
            requestAnimationFrame(rotate);
        };

        // İlk döngüyü başlat
        rotate();
    };

    // Her gezegen resmi için sonsuz dönen fonksiyonu çağır
    planetImages.forEach(function (image) {
        rotateForever(image);
    });
});
