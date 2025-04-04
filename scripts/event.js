console.log("event.js berhasil dimuat!");

// **Validasi Elemen dan Pengaturan Event Listeners**
function initializeEventListeners() {
    // Event listener untuk tombol "Tonton Iklan +5"
    const adButton = document.querySelector('button[onclick="showRewardedAd()"]');
    if (adButton) {
        adButton.addEventListener('click', showRewardedAd);
        console.log("Event listener untuk 'Tonton Iklan +5' berhasil diatur.");
    } else {
        console.error("Tombol 'Tonton Iklan +5' tidak ditemukan.");
    }

    // Event listener untuk tombol "Withdraw"
    const withdrawButton = document.querySelector('button[onclick="withdraw()"]');
    if (withdrawButton) {
        withdrawButton.addEventListener('click', withdraw);
        console.log("Event listener untuk 'Withdraw' berhasil diatur.");
    } else {
        console.error("Tombol 'Withdraw' tidak ditemukan.");
    }

    // Event listener untuk tombol "Riwayat Withdraw"
    const historyButton = document.querySelector('button[onclick="viewHistory()"]');
    if (historyButton) {
        historyButton.addEventListener('click', viewHistory);
        console.log("Event listener untuk 'Riwayat Withdraw' berhasil diatur.");
    } else {
        console.error("Tombol 'Riwayat Withdraw' tidak ditemukan.");
    }

    // Event listener untuk tombol "Kembali ke Menu"
    const backButton = document.querySelector('button[onclick="goBack()"]');
    if (backButton) {
        backButton.addEventListener('click', goBack);
        console.log("Event listener untuk 'Kembali ke Menu' berhasil diatur.");
    } else {
        console.error("Tombol 'Kembali ke Menu' tidak ditemukan.");
    }
}

// **Panggil Fungsi untuk Mengatur Event Listeners**
initializeEventListeners();
