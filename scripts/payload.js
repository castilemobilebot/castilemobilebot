// **Payload Script untuk Castile Mobile Bot**
console.log("payload.js berhasil dimuat!");

// --- Parse initData dari Telegram WebApp ---
function parseInitData(initDataString) {
    const params = new URLSearchParams(initDataString);
    const parsed = {};
    for (const [key, value] of params.entries()) {
        parsed[key] = value;
    }
    return parsed;
}

// --- Ambil data dari Telegram WebApp ---
const tg = window.Telegram?.WebApp;
const initDataRaw = tg?.initData || "";
const initDataUnsafe = tg?.initDataUnsafe || {};
const parsedData = parseInitData(initDataRaw);

// --- Ekstrak informasi user ---
const userId = initDataUnsafe.user?.id || null;
const userName = initDataUnsafe.user?.first_name || "";
const username = initDataUnsafe.user?.username || "";

// --- Debug logging ---
console.log("Parsed initData:", parsedData);
console.log("User ID:", userId);
console.log("Username:", username);

// --- Kirim autentikasi ke backend ---
async function sendAuthToBackend() {
    if (!initDataRaw) {
        console.warn("initData kosong, tidak bisa autentikasi.");
        return;
    }

    try {
        const res = await fetch("/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ initData: initDataRaw })
        });

        const result = await res.json();
        console.log("Auth result:", result);

        if (!result.success) {
            console.warn("Autentikasi gagal:", result.message || result);
        }
    } catch (err) {
        console.error("Gagal autentikasi ke backend:", err);
    }
}

// --- Ekspor agar bisa diakses dari file lain ---
window.TelegramUser = {
    tg,
    initDataRaw,
    initDataUnsafe,
    parsedData,
    userId,
    userName,
    username,
    sendAuthToBackend
};
