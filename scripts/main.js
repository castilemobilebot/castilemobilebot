console.log("main.js berhasil dimuat!");

// Inisialisasi Monetag
(function initializeMonetag() {
    if (!window.show_9164092) {
        const tag = document.createElement('script');
        tag.src = '//whephiwums.com/sdk.js'; // URL SDK Monetag
        tag.dataset.zone = '9164092';
        tag.dataset.sdk = 'show_9164092';
        document.body.appendChild(tag);
        console.log("SDK Monetag berhasil dimuat.");
    }
})();

// Menampilkan iklan Monetag dan memberikan reward
function showRewardedAd() {
    try {
        if (typeof show_9164092 !== "undefined") {
            show_9164092({
                // Callback ketika iklan selesai ditonton
                onComplete: () => {
                    console.log("Iklan selesai ditonton. Menambahkan saldo.");
                    updateBalance(0.005); // Tambahkan 0.005 poin ke saldo
                    updateAdsCount(1); // Tambahkan jumlah iklan yang ditonton
                    alert("Iklan selesai ditonton! Saldo Anda telah diperbarui.");
                },
                // Callback ketika pengguna menutup iklan sebelum selesai
                onClose: () => {
                    console.log("Iklan ditutup sebelum selesai.");
                    alert("Anda menutup iklan sebelum selesai. Tidak ada saldo yang ditambahkan.");
                }
            });
        } else {
            alert("Iklan tidak tersedia saat ini.");
            console.error("show_9164092 tidak ditemukan.");
        }
    } catch (error) {
        console.error("Error saat menampilkan iklan:", error);
    }
}

// Fungsi untuk memperbarui saldo pengguna
function updateBalance(points) {
    const balanceElement = document.getElementById("balance");
    let currentBalance = parseFloat(balanceElement.textContent) || 0;
    currentBalance += points;
    balanceElement.textContent = currentBalance.toFixed(2);
    console.log(`Saldo diperbarui: Rp ${currentBalance}`);
}

// Fungsi untuk memperbarui jumlah iklan yang ditonton
function updateAdsCount() {
    const adsCountElement = document.getElementById("ads-count");
    let currentCount = parseInt(adsCountElement.textContent) || 0;
    currentCount += 1;
    adsCountElement.textContent = currentCount;
    console.log(`Jumlah iklan ditonton diperbarui: ${currentCount}`);
}

// Proses withdraw saldo
function withdraw() {
    alert("Withdraw sedang diproses...");
    console.log("Fungsi withdraw dipanggil.");
    // Tambahkan logika untuk pengurangan saldo dan pengiriman data withdraw
}

// Menampilkan riwayat withdraw
function viewHistory() {
    alert("Menampilkan riwayat withdraw...");
    console.log("Fungsi riwayat withdraw dipanggil.");

    // Dummy data untuk riwayat withdraw
    const history = [
        { amount: 5000, date: "2025-04-01", status: "Berhasil" },
        { amount: 10000, date: "2025-03-28", status: "Pending" }
    ];

    let historyText = "📜 Riwayat Withdraw:\n";
    history.forEach(item => {
        historyText += `- ${item.date}: Rp ${item.amount} (${item.status})\n`;
    });
    alert(historyText);
}

// Navigasi kembali ke menu utama
function goBack() {
    alert("Kembali ke menu utama...");
    console.log("Navigasi ke menu utama.");
}
