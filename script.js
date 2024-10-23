const countdown = () => {
    const endDate = new Date('2024-12-06T00:00:00').getTime(); // Hedef tarih: 6 Aralık 2024
    const now = new Date().getTime(); // Şu anki zaman
    const timeLeft = endDate - now; // Kalan süreyi hesapla

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // HTML öğelerini güncelle
    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

    // Geri sayım tamamlandığında mesaj göster
    if (timeLeft < 0) {
        clearInterval(timer);
        document.querySelector('.background').innerHTML = '<h1>Hoşgeldin Yusuf Ata!</h1>';
    }
};

// Geri sayımı her saniyede bir güncelle
const timer = setInterval(countdown, 1000);
countdown(); // Sayfa yüklendiğinde hemen başlat
