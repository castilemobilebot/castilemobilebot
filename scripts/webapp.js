// Deklarasi URL API
const apiURL = "http://localhost:3000/api/updateBalance";
console.log("webapp.js berhasil dimuat!");

// **Inisialisasi Telegram WebApp**
Telegram.WebApp.ready();
console.log("Telegram WebApp siap digunakan.");

// **Fungsi Memperbarui Informasi Pengguna**
function updateUserInfo() {
    const userData = Telegram.WebApp.initDataUnsafe || {};
    if (userData.user) {
        const user = userData.user;

        // Validasi elemen HTML dan memperbarui data pengguna
        const avatarElem = document.getElementById("userAvatar");
        const usernameElem = document.getElementById("userName");
        const userIDElem = document.getElementById("userID");

        if (avatarElem) {
            avatarElem.src = user.photo_url || "assets/default-avatar.png";
        } else {
            console.warn("Elemen 'userAvatar' tidak ditemukan di HTML.");
        }

        if (usernameElem) {
            usernameElem.textContent = user.first_name || "Nama User";
        } else {
            console.warn("Elemen 'userName' tidak ditemukan di HTML.");
        }

        if (userIDElem) {
            userIDElem.textContent = user.username || "UserID";
        } else {
            console.warn("Elemen 'userID' tidak ditemukan di HTML.");
        }

        console.log("Data pengguna berhasil diperbarui:", user);
    } else {
        console.error("Gagal memuat data pengguna dari Telegram.");
        alert("WebApp tidak terhubung dengan Telegram atau data pengguna tidak tersedia.");
    }
}

// **Fungsi Memperbarui Saldo**
function updateBalance(points) {
    const balanceElem = document.getElementById("balance");
    if (balanceElem) {
        let currentBalance = parseFloat(balanceElem.textContent) || 0;
        currentBalance += points;
        balanceElem.textContent = currentBalance.toFixed(2);
        console.log(`Saldo diperbarui: Rp ${currentBalance}`);
    } else {
        console.error("Elemen saldo tidak ditemukan di HTML.");
    }
}

// **Event WebApp Ditutup**
Telegram.WebApp.onEvent("close", () => {
    console.log("WebApp ditutup oleh pengguna.");
    sendPayload("WebApp ditutup oleh pengguna."); // Kirim data saat WebApp ditutup
});

// **Panggilan Awal untuk Memperbarui Informasi Pengguna**
updateUserInfo();
