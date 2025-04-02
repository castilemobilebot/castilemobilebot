console.log("main.js berhasil dimuat!");

// Inisialisasi Monetag
(function initializeMonetag() {
    if (!window.show_9110246) {
        const tag = document.createElement('script');
        tag.src = '//whephiwums.com/sdk.js'; // URL SDK Monetag
        tag.dataset.zone = '9110246';
        tag.dataset.sdk = 'show_9110246';
        document.body.appendChild(tag);
        console.log("SDK Monetag berhasil dimuat.");
    }
})();

// Fungsi untuk menampilkan iklan dan memperbarui reward
function showRewardedAd() {
    try {
        if (typeof show_9110246 === "function") {
            show_9110246().then(() => {
                console.log("Iklan berhasil ditampilkan. Menunggu selama 15 detik...");
                // Timer selama 15 detik
                setTimeout(() => {
                    const adsCountElem = document.getElementById("ads-count");
                    const balanceElem = document.getElementById("balance");

                    if (adsCountElem && balanceElem) {
                        let adsCount = Number(adsCountElem.textContent);
                        let balance = parseFloat(balanceElem.textContent);

                        if (adsCount < 200) {
                            adsCount += 1;
                            balance += 5; // Menambahkan reward +5

                            // Update elemen DOM
                            adsCountElem.textContent = adsCount;
                            balanceElem.textContent = balance.toFixed(2);

                            alert("Anda telah menonton iklan! Reward: +5 poin");
                            console.log(`Iklan ke-${adsCount} berhasil! Balance sekarang: Rp${balance.toFixed(2)}`);
                        } else {
                            alert("Anda telah mencapai batas maksimum 200 iklan.");
                            console.warn("Batas maksimum iklan tercapai.");
                        }
                    } else {
                        alert("Elemen ads-count atau balance tidak ditemukan. Silakan periksa ID elemen.");
                        console.error("Elemen HTML tidak ditemukan.");
                    }
                }, 15000); // Durasi 15 detik
            }).catch((error) => {
                console.error("Terjadi kesalahan saat menampilkan iklan:", error);
                alert("Iklan gagal ditampilkan. Silakan coba lagi nanti.");
            });
        } else {
            alert("SDK Monetag tidak siap. Silakan tunggu beberapa saat.");
            console.warn("show_9110246 belum terdefinisi.");
        }
    } catch (error) {
        console.error("Error dalam showRewardedAd:", error);
        alert("Terjadi kesalahan saat mencoba menonton iklan.");
    }
}

// Fungsi tambahan untuk tombol Withdraw
function withdraw() {
    alert("Fitur withdraw masih dalam pengembangan!");
    console.log("Withdraw ditekan oleh pengguna.");
}

// Fungsi tambahan untuk tombol Riwayat Withdraw
function viewHistory() {
    alert("Menampilkan riwayat withdraw...");
    console.log("Riwayat withdraw diminta oleh pengguna.");
}

// Fungsi tambahan untuk tombol Kembali ke Menu
function goBack() {
    alert("Kembali ke menu utama.");
    console.log("Pengguna kembali ke menu.");
}

// Tambahkan event listener ke tombol saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    console.log("Halaman berhasil dimuat, menambahkan event listener.");

    const adButton = document.querySelector("button[onclick='showRewardedAd()']");
    const withdrawButton = document.querySelector("button[onclick='withdraw()']");
    const historyButton = document.querySelector("button[onclick='viewHistory()']");
    const backButton = document.querySelector("button[onclick='goBack()']");

    if (adButton) adButton.addEventListener("click", showRewardedAd);
    if (withdrawButton) withdrawButton.addEventListener("click", withdraw);
    if (historyButton) historyButton.addEventListener("click", viewHistory);
    if (backButton) backButton.addEventListener("click", goBack);

    console.log("Semua tombol berhasil ditambahkan event listener.");
});
