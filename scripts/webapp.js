console.log("webapp.js berhasil dimuat!");

// **Inisialisasi Telegram WebApp**
Telegram.WebApp.ready();
console.log("Telegram WebApp siap digunakan.");

// **Fungsi Memperbarui Informasi Pengguna**
function updateUserInfo() {
    const userData = Telegram.WebApp.initDataUnsafe || {};
    if (userData.user) {
        const user = userData.user;

        // Mendapatkan elemen HTML
        const avatarElem = document.getElementById("userAvatar");
        const usernameElem = document.getElementById("userName");
        const userIDElem = document.getElementById("userID");

        // Memperbarui data pengguna di antarmuka
        if (avatarElem) {
            avatarElem.src = user.photo_url || "assets/default-avatar.png";
            console.log("Avatar diperbarui.");
        } else {
            console.warn("Elemen 'userAvatar' tidak ditemukan.");
        }

        if (usernameElem) {
            usernameElem.textContent = user.first_name || "Nama User";
            console.log("Nama pengguna diperbarui.");
        } else {
            console.warn("Elemen 'userName' tidak ditemukan.");
        }

        if (userIDElem) {
            userIDElem.textContent = user.username || "UserID";
            console.log("ID pengguna diperbarui.");
        } else {
            console.warn("Elemen 'userID' tidak ditemukan.");
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
        balanceElem.textContent = currentBalance.toFixed(2); // Format saldo agar rapi
        console.log(`Saldo diperbarui: Rp ${currentBalance}`);
    } else {
        console.error("Elemen saldo tidak ditemukan di HTML.");
    }
}

// **Fungsi Mengirim Data saat WebApp Ditutup**
function sendClosePayload() {
    try {
        sendPayload("WebApp ditutup oleh pengguna."); // Kirim data saat WebApp ditutup
        console.log("Payload dikirim saat WebApp ditutup.");
    } catch (error) {
        console.error("Error saat mengirim payload saat penutupan WebApp:", error);
    }
}

// **Event Listener untuk WebApp Ditutup**
Telegram.WebApp.onEvent("close", sendClosePayload);

// **Panggilan Awal untuk Memperbarui Informasi Pengguna**
updateUserInfo();
