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

// Menampilkan iklan dan memberikan reward
function showRewardedAd() {
    try {
        if (typeof show_9164092 !== "undefined") {
            show_9164092({
                onComplete: () => {
                    console.log("Iklan selesai ditonton. Menambahkan saldo.");
                    updateBalance(5); // Tambahkan 5 poin
                    alert("Iklan selesai ditonton! Saldo Anda telah diperbarui.");
                },
                onClose: () => {
                    console.log("Iklan ditutup sebelum selesai.");
                    alert("Anda menutup iklan sebelum selesai. Tidak ada saldo yang ditambahkan.");
                }
            });
        } else {
            console.error("show_9164092 tidak ditemukan.");
            alert("Iklan tidak tersedia saat ini.");
        }
    } catch (error) {
        console.error("Error saat menampilkan iklan:", error);
    }
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
