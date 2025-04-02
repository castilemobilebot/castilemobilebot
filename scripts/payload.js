// payload.js
document.addEventListener("DOMContentLoaded", () => {
    // Periksa apakah Telegram WebApp tersedia
    if (window.Telegram && window.Telegram.WebApp) {
        const webApp = Telegram.WebApp;

        console.log("Payload handler berhasil dimuat.");

        // **Mengirim Data ke Bot**
        window.sendPayload = function (payloadData) {
            if (payloadData && typeof payloadData === "object") {
                const payloadString = JSON.stringify(payloadData);
                webApp.sendData(payloadString); // Kirim JSON payload ke bot
                console.log("Payload berhasil dikirim:", payloadString);
            } else {
                console.error("Payload tidak valid. Harus berupa objek!");
            }
        };

        // **Menerima Data dari Bot**
        window.receivePayload = function (messageData) {
            if (messageData && typeof messageData === "object") {
                console.log("Payload diterima dari bot:", messageData);

                // Proses data respons bot (contoh: memperbarui UI)
                if (messageData.action === "updateBalance") {
                    const balanceElement = document.getElementById("balance");
                    balanceElement.innerText = messageData.newBalance || "0";
                }
            } else {
                console.error("Data yang diterima tidak valid.");
            }
        };

        // **Tes Kirim Payload (Opsional)**
        document.getElementById("testSendPayload").addEventListener("click", () => {
            const payload = {
                action: "testAction",
                message: "Ini adalah data payload uji coba.",
            };
            sendPayload(payload);
        });

        console.log("Payload handler siap.");
    } else {
        console.error("Telegram WebApp tidak tersedia! Pastikan dijalankan dalam konteks WebApp Telegram.");
    }
});
