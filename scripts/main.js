// **Main Script untuk Castile Mobile Bot**
console.log("main.js berhasil dimuat!");

document.addEventListener("DOMContentLoaded", async () => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const initData = tg.initData;
    const initDataUnsafe = tg.initDataUnsafe;
    const user = initDataUnsafe?.user;

    if (!user) {
        console.error("User data tidak tersedia. Pastikan Mini App dibuka dari dalam Telegram.");
        return;
    }

    const userId = user.id;
    const firstName = user.first_name || "Pengguna";
    const username = user.username || null;

    // ✅ Update elemen UI dengan data user
    document.getElementById("userName").textContent = firstName;
    document.getElementById("userID").textContent = username || `ID: ${userId}`;

    // ✅ Atur avatar user
    const avatarUrl = username
        ? `https://t.me/i/userpic/320/${username}.jpg`
        : "assets/default-avatar.png";
    document.getElementById("userAvatar").src = avatarUrl;

    // ✅ Autentikasi ke backend
    try {
        const authRes = await fetch("/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ initData }),
        });

        const authData = await authRes.json();
        if (!authRes.ok) {
            console.error("Gagal autentikasi:", authData.error || authData);
            return;
        }
    } catch (err) {
        console.error("Terjadi kesalahan saat autentikasi:", err);
        return;
    }

    // ✅ Ambil data saldo & jumlah iklan
    try {
        const res = await fetch(`/api/user/${userId}`);
        const data = await res.json();

        if (res.ok && data) {
            const { balance = 0, ads_count = 0 } = data;
            document.getElementById("balance").textContent = parseFloat(balance).toFixed(3);
            document.getElementById("ads-count").textContent = ads_count;
        } else {
            console.error("Data user tidak valid:", data);
        }
    } catch (err) {
        console.error("Gagal mengambil data user:", err);
    }

    // ✅ Daftarkan user ke database jika belum ada
    try {
        await fetch("/register_user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: userId,
                first_name: firstName,
                username,
            }),
        });
    } catch (err) {
        console.warn("Gagal register user:", err);
    }

    // ✅ Aksi tombol menu (Kembali)
    document.getElementById("menuButton").addEventListener("click", () => {
        tg.close();
    });
});
