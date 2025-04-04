// **Main Script untuk Castile Mobile Bot**
console.log("main.js berhasil dimuat!");

// **Inisialisasi Monetag SDK**
(function initializeMonetag() {
    try {
        const tag = document.createElement("script");
        tag.src = "//whephiwums.com/sdk.js"; // URL SDK Monetag
        tag.dataset.zone = "9164092";
        tag.dataset.sdk = "show_9164092";
        document.body.appendChild(tag);
        console.log("SDK Monetag berhasil dimuat.");
    } catch (error) {
        console.error("Error saat memuat Monetag SDK:", error);
    }
})();

// **Fungsi Menampilkan Iklan Rewarded**
function showRewardedAd() {
    try {
        if (typeof show_9164092 === "function") {
            show_9164092()
                .then(() => {
                    const adsCountElem = document.getElementById("ads-count");
                    const balanceElem = document.getElementById("balance");

                    if (adsCountElem && balanceElem) {
                        let adsCount = Number(adsCountElem.textContent || "0");
                        let balance = parseFloat(balanceElem.textContent || "0");

                        // Validasi batas maksimal iklan
                        if (adsCount < 200) {
                            adsCount += 1;
                            balance += 0.005; // Tambahkan reward iklan sebesar Rp 0.005

                            adsCountElem.textContent = adsCount.toString();
                            balanceElem.textContent = balance.toFixed(3); // Format saldo dengan presisi
                            console.log(`Iklan berhasil ditonton. Total iklan: ${adsCount}, Saldo: Rp ${balance}`);
                        } else {
                            alert("Batas maksimal iklan harian telah tercapai.");
                            console.warn("Pengguna telah mencapai batas iklan harian.");
                        }
                    } else {
                        console.warn("Elemen 'ads-count' atau 'balance' tidak ditemukan di HTML.");
                    }
                })
                .catch((error) => {
                    console.error("Error saat menampilkan iklan:", error);
                    alert("Terjadi kesalahan saat menampilkan iklan.");
                });
        } else {
            console.error("Fungsi 'show_9164092' tidak tersedia.");
            alert("SDK Monetag belum dimuat.");
        }
    } catch (error) {
        console.error("Error saat memproses iklan rewarded:", error);
        alert("Terjadi kesalahan internal.");
    }
}

// **Proses Withdraw Saldo**
function withdrawFunds() {
    const balanceElem = document.getElementById("balance");
    if (balanceElem) {
        let currentBalance = parseFloat(balanceElem.textContent || "0");

        // Atur batas minimal penarikan
        const minimalWithdraw = 5000;

        if (currentBalance >= minimalWithdraw) {
            currentBalance -= minimalWithdraw; // Kurangi saldo dengan nilai minimal withdraw
            balanceElem.textContent = currentBalance.toFixed(2);

            alert(`Withdraw sebesar Rp ${minimalWithdraw} telah diproses.`);
            console.log(`Withdraw berhasil. Saldo sekarang: Rp ${currentBalance}`);
        } else {
            alert(`Saldo tidak mencukupi untuk withdraw. Minimal penarikan adalah Rp ${minimalWithdraw}.`);
            console.warn("Saldo tidak cukup untuk withdraw.");
        }
    } else {
        console.error("Elemen saldo tidak ditemukan di HTML.");
    }
}

// **Array untuk Riwayat Transaksi**
const transactions = [];

// **Menampilkan Riwayat Withdraw**
function viewHistory() {
    if (transactions.length === 0) {
        alert("Riwayat transaksi kosong. Belum ada penarikan saldo yang dilakukan.");
        console.log("Riwayat transaksi kosong.");
    } else {
        let historyText = "📜 Riwayat Withdraw:\n";
        transactions.forEach(item => {
            historyText += `- Tanggal: ${item.date}, Jumlah: Rp ${item.amount}, Status: ${item.status}\n`;
        });

        alert(historyText);
        console.log("Riwayat transaksi berhasil ditampilkan.");
    }
}

// **Fungsi Menambah Transaksi**
function addTransaction(amount, status) {
    const date = new Date().toISOString().split('T')[0]; // Format tanggal (YYYY-MM-DD)
    transactions.push({ amount, date, status });
    console.log(`Transaksi baru ditambahkan: Rp ${amount}, Tanggal: ${date}, Status: ${status}`);
}

// **Navigasi ke Menu Utama**
function goBack() {
    alert("Kembali ke menu utama...");
    console.log("Pengguna kembali ke menu utama.");
}

// **Event untuk Tombol**
document.getElementById("rewardedAdButton").addEventListener("click", showRewardedAd);
document.getElementById("withdrawButton").addEventListener("click", withdrawFunds);
document.getElementById("historyButton").addEventListener("click", viewHistory);
document.getElementById("menuButton").addEventListener("click", goBack);
