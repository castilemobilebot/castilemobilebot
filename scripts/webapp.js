// event.js
document.addEventListener("DOMContentLoaded", () => {
    // Periksa apakah Telegram WebApp tersedia
    if (window.Telegram && window.Telegram.WebApp) {
        const webApp = Telegram.WebApp;

        // Inisialisasi WebApp Telegram
        console.log("Telegram WebApp ditemukan. Menginisialisasi...");
        webApp.ready();

        // Gaya tema otomatis berdasarkan Telegram
        const themeParams = webApp.themeParams;
        document.body.style.backgroundColor = themeParams.bg_color || '#ffffff';
        document.body.style.color = themeParams.text_color || '#000000';

        // Mendapatkan data pengguna
        const initData = webApp.initDataUnsafe;
        const user = initData.user;

        if (user) {
            // Perbarui elemen user
            document.getElementById('userName').innerText = user.first_name || 'Pengguna';
            document.getElementById('userID').innerText = user.username || 'Unknown';
            document.getElementById('userAvatar').src = user.photo_url || 'assets/default-avatar.png';
            console.log("Informasi pengguna berhasil dimuat.");
        } else {
            console.warn("Informasi pengguna tidak tersedia.");
        }

        // Fungsi untuk menampilkan iklan
        window.showRewardedAd = function () {
            if (typeof show_9164092 === 'function') {
                show_9164092().then(() => {
                    alert('Iklan selesai ditonton! Saldo Anda telah diperbarui.');
                    // Tambahkan logika untuk memperbarui saldo di sini
                    const balanceElement = document.getElementById('balance');
                    const newBalance = parseFloat(balanceElement.innerText) + 500; // Tambahkan Rp500
                    balanceElement.innerText = newBalance.toFixed(2);

                    // Perbarui jumlah iklan
                    const adsCountElement = document.getElementById('ads-count');
                    const newAdsCount = parseInt(adsCountElement.innerText) + 1;
                    adsCountElement.innerText = newAdsCount;
                }).catch((error) => {
                    console.error('Gagal menampilkan iklan:', error);
                });
            } else {
                alert('Iklan belum siap. Coba lagi nanti.');
            }
        };

        // Fungsi untuk withdraw
        window.withdraw = function () {
            alert('Permintaan withdraw berhasil dikirim!');
        };

        // Fungsi untuk melihat riwayat withdraw
        window.viewHistory = function () {
            alert('Menampilkan riwayat withdraw...');
        };

        // Fungsi kembali ke menu utama
        window.goBack = function () {
            alert('Kembali ke menu utama...');
        };

    } else {
        console.error("Telegram WebApp tidak tersedia!");
    }
});
