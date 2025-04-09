// **API Script untuk Castile Mobile Bot**
console.log("api.js berhasil dimuat!");

// 🔄 Fungsi untuk memperbarui saldo setelah menonton iklan
async function updateBalance(userId) {
    try {
        const res = await fetch("/reward", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userId })
        });

        const data = await res.json();

        if (data.balance !== undefined) {
            const balanceElem = document.getElementById("balance");
            if (balanceElem) {
                balanceElem.textContent = parseFloat(data.balance).toFixed(3);
            }
            showMessage("Saldo berhasil ditambahkan!");
        } else {
            throw new Error("Data saldo tidak valid.");
        }

    } catch (err) {
        console.error("Error updating balance:", err);
        showMessage("Gagal menambahkan saldo.");
    }
}

// 💸 Fungsi untuk melakukan penarikan
async function withdraw(userId, phone, amount) {
    if (!userId || !phone || !amount) {
        showMessage("Data withdraw tidak lengkap.");
        return;
    }

    try {
        const res = await fetch("/withdraw", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userId, phone, amount })
        });

        const data = await res.json();
        showMessage(data.message || "Permintaan withdraw diproses.");
    } catch (err) {
        console.error("Withdraw error:", err);
        showMessage("Gagal melakukan withdraw.");
    }
}

// Ekspor fungsi supaya bisa dipakai global (misalnya dari `events.js`)
window.API = {
    updateBalance,
    withdraw
};
