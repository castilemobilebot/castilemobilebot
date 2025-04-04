console.log('main.js berhasil dimuat!');

// Menambahkan integrasi Monetag
(function initializeMonetag() {
    if (!window.show_9110246) {
        const tag = document.createElement('script');
        tag.src = '//whephiwums.com/sdk.js'; // Pastikan URL ini benar sesuai dengan Monetag SDK
        tag.dataset.zone = '9110246';
        tag.dataset.sdk = 'show_9110246';
        document.body.appendChild(tag);
    }
})();

// Fungsi untuk menunjukkan iklan dan memperbarui reward
function showRewardedAd() {
    try {
        const userId = window.Telegram.WebApp.initDataUnsafe.user.id; // Mendapatkan ID pengguna dari Telegram WebApp

        if (typeof show_9110246 === 'function') {
            show_9110246().then(() => {
                // Timer selama 15 detik
                setTimeout(() => {
                    // Memperbarui reward pengguna
                    const adsCountElem = document.getElementById('ads-count');
                    const balanceElem = document.getElementById('balance');

                    if (adsCountElem && balanceElem) {
                        let adsCount = Number(adsCountElem.textContent);
                        let balance = parseFloat(balanceElem.textContent);

                        if (adsCount < 200) {
                            adsCount += 1;
                            balance += 5; // Menambahkan reward +5 poin

                            adsCountElem.textContent = adsCount;
                            balanceElem.textContent = balance;

                            alert('Anda telah menonton iklan! Reward: +5 poin');
                        } else {
                            alert('Anda telah mencapai batas maksimum 200 iklan.');
                        }
                    } else {
                        console.error('Elemen HTML untuk ads-count atau balance tidak ditemukan.');
                        alert('Terjadi kesalahan pada elemen halaman.');
                    }
                }, 15000); // Durasi 15 detik
            }).catch(error => {
                console.error('Iklan gagal ditampilkan:', error);
                alert('Terjadi kesalahan saat menampilkan iklan.');
            });
        } else {
            alert('Iklan belum siap. Silakan coba lagi nanti.');
        }
    } catch (error) {
        console.error('Error dalam showRewardedAd:', error);
        alert('Terjadi kesalahan saat mencoba menonton iklan.');
    }
}

// Tambahkan event listener ke tombol "Tonton Iklan"
document.addEventListener('DOMContentLoaded', () => {
    const adButton = document.getElementById('show-ad-button');
    if (adButton) {
        adButton.addEventListener('click', showRewardedAd);
        console.log('Event listener berhasil ditambahkan ke tombol Tonton Iklan.');
    } else {
        console.error('Tombol Tonton Iklan tidak ditemukan.');
    }
});
