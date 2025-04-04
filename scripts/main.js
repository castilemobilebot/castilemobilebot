console.log("main.js berhasil dimuat!");

// Inisialisasi Monetag
(function initializeMonetag() {
    if (typeof show_9164092 === 'function') { // Pastikan fungsi tersedia
        const tag = document.createElement('script');
        tag.src = '//whephiwums.com/sdk.js'; // URL SDK Monetag
        tag.dataset.zone = '9164092';
        tag.dataset.sdk = 'show_9164092';
        document.body.appendChild(tag);
        console.log("SDK Monetag berhasil dimuat.");
    } else {
        console.error("show_9164092 tidak tersedia.");
    }
})();

// Fungsi menampilkan iklan rewarded
function showRewardedAd() {
    try {
        if (typeof show_9164092 === 'function') {
            show_9164092().then(() => {
                const adsCountElem = document.getElementById('ads-count');
                const balanceElem = document.getElementById('balance');
                if (adsCountElem && balanceElem) {
                    let adsCount = Number(adsCountElem.textContent || '0'); // Antisipasi nilai awal yang kosong
                    let balance = parseFloat(balanceElem.textContent || '0');

                    if (adsCount < 200) {
                        adsCount += 1;
                        balance += 0.005; // Menambahkan reward +0.005 poin

                        adsCountElem.textContent = adsCount.toString();
                        balanceElem.textContent = balance.toFixed(3); // Format angka untuk presisi
                    } else {
                        alert("Batas maksimal iklan telah tercapai.");
                    }
                } else {
                    console.warn("Elemen 'ads-count' atau 'balance' tidak ditemukan.");
                }
            }).catch(error => {
                console.error("Error saat menampilkan iklan:", error);
                alert("Terjadi kesalahan saat menampilkan iklan.");
            });
        } else {
            console.error("Fungsi 'show_9164092' tidak tersedia.");
            alert("SDK Monetag belum dimuat.");
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menampilkan iklan.');
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
        historyText += `- ${item.date}: Rp ${item.amount.toLocaleString()} (${item.status})\n`; // Format jumlah dengan pemisah ribuan
    });
    alert(historyText);
}

// Navigasi kembali ke menu utama
function goBack() {
    alert("Kembali ke menu utama...");
    console.log("Navigasi ke menu utama.");
}
