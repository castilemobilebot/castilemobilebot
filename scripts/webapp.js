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

// **Fungsi Memperbarui Saldo dari Backend**
async function fetchBalance(userId) {
    try {
        const response = await fetch(`http://localhost:3000/api/getBalance?userId=${userId}`);
        const data = await response.json();
        if (data.status === "success") {
            const balanceElem = document.getElementById("balance");
            if (balanceElem) {
                balanceElem.textContent = data.balance.toFixed(2); // Tampilkan saldo
                console.log(`Saldo diperbarui: Rp ${data.balance}`);
            }
        } else {
            console.error(`Error saat mengambil saldo: ${data.message}`);
        }
    } catch (error) {
        console.error("Error saat memanggil API getBalance:", error);
    }
}

// **Fungsi Memperbarui Saldo setelah Menonton Iklan**
async function updateBalance(points) {
    const userId = "123456"; // Ganti dengan userId yang sesuai
    try {
        const response = await fetch("http://localhost:3000/api/updateBalance", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, points }),
        });
        const data = await response.json();
        if (data.status === "success") {
            const balanceElem = document.getElementById("balance");
            if (balanceElem) {
                balanceElem.textContent = data.balance.toFixed(2); // Tampilkan saldo
                console.log(`Saldo berhasil diperbarui: Rp ${data.balance}`);
            }
        } else {
            console.error(`Error saat memperbarui saldo: ${data.message}`);
        }
    } catch (error) {
        console.error("Error saat memanggil API updateBalance:", error);
    }
}

// **Event Listener untuk Tombol Menonton Iklan**
document.getElementById("rewardedAdButton").addEventListener("click", async () => {
    const points = 0.005; // Poin yang didapatkan setelah menonton iklan
    await updateBalance(points); // Memperbarui saldo di backend
});

// **Fungsi Mengirim Data saat WebApp Ditutup**
function sendClosePayload() {
    try {
        Telegram.WebApp.sendData("WebApp ditutup oleh pengguna."); // Kirim data saat WebApp ditutup
        console.log("Payload dikirim saat WebApp ditutup.");
    } catch (error) {
        console.error("Error saat mengirim payload saat penutupan WebApp:", error);
    }
}

// **Event Listener untuk WebApp Ditutup**
Telegram.WebApp.onEvent("close", sendClosePayload);

// **Panggilan Awal untuk Memperbarui Informasi Pengguna**
document.addEventListener("DOMContentLoaded", () => {
    const userId = "123456"; // Ganti dengan userId yang sesuai
    updateUserInfo();
    fetchBalance(userId); // Ambil saldo dari backend
});
