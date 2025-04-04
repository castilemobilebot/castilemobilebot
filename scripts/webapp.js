// Inisialisasi Telegram WebApp
Telegram.WebApp.ready();
console.log("Telegram WebApp siap digunakan.");

// Mendapatkan data pengguna dari Telegram
const userData = Telegram.WebApp.initDataUnsafe || {};
if (userData.user) {
    document.getElementById("userName").textContent = userData.user.first_name || "Nama User";
    document.getElementById("userID").textContent = userData.user.username || "UserID";
    document.getElementById("userAvatar").src = userData.user.photo_url || "assets/default-avatar.png";
    console.log("Data pengguna:", userData);
} else {
    console.error("Gagal memuat data pengguna dari Telegram.");
    alert("WebApp tidak terhubung dengan Telegram.");
}

// Memperbarui saldo
function updateBalance(points) {
    const balanceElement = document.getElementById("balance");
    let currentBalance = parseFloat(balanceElement.textContent) || 0.005;
    currentBalance += 0.005points;
    balanceElement.textContent = currentBalance.toFixed(2);
    console.log(`Saldo diperbarui: Rp ${currentBalance}`);
}

// Kirim data saat WebApp ditutup
Telegram.WebApp.onEvent("close", () => {
    console.log("WebApp ditutup.");
    sendPayload("WebApp ditutup oleh pengguna.");
});
