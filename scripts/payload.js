console.log("payload.js berhasil dimuat!");

// **Fungsi untuk Mengirim Payload ke Bot Telegram**
function sendPayload(message) {
    try {
        // Validasi Telegram WebApp API
        if (Telegram.WebApp && typeof Telegram.WebApp.sendData === "function") {
            Telegram.WebApp.sendData(message);
            alert("Payload terkirim: " + message);
            console.log("Payload terkirim:", message);
        } else {
            console.error("Telegram WebApp tidak tersedia atau fungsi 'sendData' tidak ditemukan.");
            alert("Gagal mengirim payload: Telegram WebApp tidak tersedia.");
        }
    } catch (error) {
        console.error("Error saat mengirim payload:", error);
        alert("Terjadi kesalahan saat mengirim payload. Silakan coba lagi.");
    }
}

// **Inisialisasi Event Listener untuk Tombol**
function initializePayloadEvents() {
    const testButton = document.getElementById("testSendPayload");
    if (testButton) {
        testButton.addEventListener("click", () => {
            sendPayload("Payload contoh terkirim ke bot Telegram.");
        });
        console.log("Event listener untuk tombol 'testSendPayload' berhasil diatur.");
    } else {
        console.error("Tombol 'testSendPayload' tidak ditemukan di HTML.");
    }
}

// **Memulai Event Listener saat Script Dimuat**
initializePayloadEvents();
