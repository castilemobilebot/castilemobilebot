// **Script untuk Mengelola Payload Telegram WebApp**
console.log("payload.js berhasil dimuat!");

// **Fungsi untuk Mengirim Payload ke Bot Telegram**
function sendPayload(message) {
    try {
        // Validasi apakah Telegram WebApp tersedia
        if (Telegram.WebApp && typeof Telegram.WebApp.sendData === "function") {
            Telegram.WebApp.sendData(message);
            alert(`Payload berhasil terkirim: ${message}`);
            console.log("Payload terkirim:", message);
        } else {
            console.error("Telegram WebApp tidak tersedia atau fungsi 'sendData' tidak ditemukan.");
            alert("Gagal mengirim payload: Telegram WebApp tidak tersedia.");
        }
    } catch (error) {
        console.error("Error saat mengirim payload:", error);
        alert("Terjadi kesalahan saat mengirim payload. Silakan coba lagi nanti.");
    }
}

// **Fungsi untuk Mengatur Event Listener pada Tombol**
function initializePayloadEvents() {
    // Mendapatkan elemen tombol dengan ID 'testSendPayload'
    const testButton = document.getElementById("testSendPayload");
    if (testButton) {
        testButton.addEventListener("click", () => {
            const message = "Payload contoh terkirim ke bot Telegram."; // Pesan payload
            sendPayload(message);
        });
        console.log("Event listener untuk tombol 'testSendPayload' berhasil diatur.");
    } else {
        console.error("Tombol 'testSendPayload' tidak ditemukan di HTML.");
    }
}

// **Fungsi untuk Membuat Payload Dinamis**
function createDynamicPayload(data) {
    try {
        const payload = JSON.stringify(data);
        sendPayload(payload);
    } catch (error) {
        console.error("Error saat membuat payload dinamis:", error);
    }
}

// **Memulai Event Listener saat Script Dimuat**
initializePayloadEvents();