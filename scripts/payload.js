console.log("payload.js berhasil dimuat!");

// Mengirim payload ke bot Telegram
function sendPayload(message) {
    try {
        Telegram.WebApp.sendData(message);
        alert("Payload terkirim: " + message);
        console.log("Payload terkirim:", message);
    } catch (error) {
        console.error("Error saat mengirim payload:", error);
    }
}

// Contoh penggunaan saat tombol uji payload diklik
document.getElementById("testSendPayload").addEventListener("click", () => {
    sendPayload("Payload contoh terkirim ke bot Telegram.");
});
