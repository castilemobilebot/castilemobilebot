console.log("main.js berhasil dimuat!");

// Inisialisasi Monetag
(function initializeMonetag() {
    if (show_9164092) {
        const tag = document.createElement('script');
        tag.src = '//whephiwums.com/sdk.js'; // URL SDK Monetag
        tag.dataset.zone = '9164092';
        tag.dataset.sdk = 'show_9164092';
        document.body.appendChild(tag);
        console.log("SDK Monetag berhasil dimuat.");
    }
})();

// Reward ad function
function showRewardedAd() {
    try {
        if (typeof show_9164092 === 'function') {
            show_9164092().then(() => {
                const adsCountElem = document.getElementById('ads-count');
                const balanceElem = document.getElementById('balance');
                if (adsCountElem && balanceElem) {
                    let adsCount = Number(adsCountElem.textContent);
                    let balance = parseFloat(balanceElem.textContent || '0');

                    if (adsCount < 200) {
                        adsCount += 1;
                        balance += 0.005; // Menambahkan reward +0.005 poin

                        adsCountElem.textContent = adsCount.toString();
                        balanceElem.textContent = balance.toString();
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while showing the ad.');
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
