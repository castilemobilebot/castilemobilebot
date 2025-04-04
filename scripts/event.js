console.log("event.js berhasil dimuat!");

// **Validasi Elemen dan Pengaturan Event Listeners**
function initializeEventListeners() {
    // Mendapatkan elemen-elemen tombol dengan ID yang sesuai
    const buttons = [
        { selector: 'button[onclick="showRewardedAd()"]', action: showRewardedAd, name: "Tonton Iklan +5" },
        { selector: 'button[onclick="withdraw()"]', action: withdraw, name: "Withdraw" },
        { selector: 'button[onclick="viewHistory()"]', action: viewHistory, name: "Riwayat Withdraw" },
        { selector: 'button[onclick="goBack()"]', action: goBack, name: "Kembali ke Menu" }
    ];

    // Loop melalui semua tombol untuk mengatur event listener
    buttons.forEach(({ selector, action, name }) => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener('click', action);
            console.log(`Event listener untuk '${name}' berhasil diatur.`);
        } else {
            console.error(`Tombol '${name}' tidak ditemukan.`);
        }
    });
}

// **Contoh Fungsi Aksi untuk Tiap Tombol**
// Fungsi ini berfungsi sebagai placeholder, kamu dapat menggantinya dengan logika sebenarnya.

function showRewardedAd() {
    console.log("Tombol 'Tonton Iklan +5' ditekan.");
    alert("Anda akan menonton iklan untuk mendapatkan saldo!");
    // Tambahkan logika API atau fitur lainnya di sini
}

function withdraw() {
    console.log("Tombol 'Withdraw' ditekan.");
    alert("Fitur withdraw akan diproses!");
    // Tambahkan logika untuk permintaan withdraw
}

function viewHistory() {
    console.log("Tombol 'Riwayat Withdraw' ditekan.");
    alert("Menampilkan riwayat withdraw!");
    // Tambahkan logika untuk menampilkan riwayat withdraw
}

function goBack() {
    console.log("Tombol 'Kembali ke Menu' ditekan.");
    alert("Kembali ke menu utama!");
    // Tambahkan logika untuk kembali ke halaman utama
}

// **Panggil Fungsi untuk Mengatur Event Listeners**
initializeEventListeners();
