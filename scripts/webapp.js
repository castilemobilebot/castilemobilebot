// Inisialisasi Telegram WebApp
Telegram.WebApp.ready(); // Memastikan WebApp siap digunakan

// Mendapatkan data pengguna dari Telegram
const userData = Telegram.WebApp.initDataUnsafe || {};
if (userData.user) {
    // Update informasi pengguna ke elemen HTML
    document.getElementById("userName").textContent = userData.user.first_name || "Nama User";
    document.getElementById("userID").textContent = userData.user.username || "UserID";
    document.getElementById("userAvatar").src = userData.user.photo_url || "assets/default-avatar.png";
    console.log("Data pengguna:", userData);
} else {
    console.error("Data pengguna tidak tersedia. Pastikan Telegram WebApp SDK terhubung.");
    alert("WebApp tidak terhubung dengan Telegram.");
}

// Fungsi untuk menampilkan iklan Monetag
function showRewardedAd() {
    try {
        if (typeof show_9164092 !== "undefined") {
            show_9164092(); // Memanggil Monetag SDK untuk menampilkan iklan
            console.log("Iklan Monetag ditampilkan.");
        } else {
            alert("Iklan tidak tersedia saat ini.");
            console.error("show_9164092 tidak ditemukan.");
        }
    } catch (error) {
        console.error("Error menampilkan iklan:", error);
    }
}

// Fungsi untuk proses Withdraw
function withdraw() {
    alert("Withdraw saldo Anda sedang diproses...");
    console.log("Fungsi withdraw dipanggil.");
    // Logika tambahan untuk withdraw dapat ditambahkan di sini
}

// Fungsi untuk melihat riwayat withdraw
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
    console.log(historyText);
}

// Fungsi untuk kembali ke menu utama
function goBack() {
    alert("Kembali ke menu utama...");
    console.log("Fungsi kembali ke menu dipanggil.");
    // Implementasi untuk navigasi menu utama dapat ditambahkan di sini
}

// Fungsi uji kirim payload
document.getElementById("testSendPayload").addEventListener("click", () => {
    Telegram.WebApp.sendData("Uji payload terkirim dari WebApp");
    alert("Payload terkirim! Periksa data yang diterima di bot Telegram.");
    console.log("Payload uji terkirim.");
});

// Log aktivitas saat WebApp aktif
console.log("WebApp telah diinisialisasi dengan baik.");
