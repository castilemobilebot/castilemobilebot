// ✅ Events Script untuk Castile Mobile Bot
console.log("events.js berhasil dimuat!");

document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    const userId = tg?.initDataUnsafe?.user?.id;

    const adButton = document.getElementById("rewardedAdButton");
    const withdrawButton = document.getElementById("withdrawButton");
    const historyButton = document.getElementById("historyButton");
    const menuButton = document.getElementById("menuButton");
    const withdrawForm = document.getElementById("withdrawForm");
    const withdrawBtn = document.getElementById("withdrawBtn");
    const closeHistory = document.getElementById("closeHistory");
    const historyPopup = document.getElementById("historyPopup");
    const messageBox = document.getElementById("message");

    // ✅ Fungsi tampilkan iklan (Monetag)
    adButton?.addEventListener("click", async () => {
        try {
            if (typeof show_9164092 === "function") {
                await show_9164092();

                const adsCountElem = document.getElementById("ads-count");
                const balanceElem = document.getElementById("balance");

                let adsCount = Number(adsCountElem?.textContent || "0");
                let balance = parseFloat(balanceElem?.textContent || "0");

                if (adsCount < 1000) {
                    adsCount += 1;
                    balance += 0.005;

                    if (adsCountElem) adsCountElem.textContent = adsCount.toString();
                    if (balanceElem) balanceElem.textContent = balance.toFixed(3);

                    console.log(`Iklan ditonton. Total: ${adsCount}, Saldo: Rp ${balance}`);

                    await fetch("/update_ad_reward", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ user_id: userId, ads_count: adsCount, balance }),
                    });
                } else {
                    alert("Batas maksimal iklan harian telah tercapai.");
                }
            } else {
                alert("Iklan belum siap. Tunggu sebentar.");
            }
        } catch (error) {
            console.error("Gagal menampilkan iklan:", error);
            alert("Kesalahan saat menampilkan iklan.");
        }
    });

    // ✅ Toggle form withdraw
    withdrawButton?.addEventListener("click", () => {
        withdrawForm.style.display = (withdrawForm.style.display === "block") ? "none" : "block";
    });

    // ✅ Tutup Mini App
    menuButton?.addEventListener("click", () => {
        tg.close();
    });

    // ✅ Tampilkan riwayat withdraw
    historyButton?.addEventListener("click", async () => {
        try {
            const res = await fetch(`/history?user_id=${userId}`);
            const data = await res.json();

            const historyContent = document.getElementById("historyContent");
            historyContent.innerHTML = "";

            if (data.length === 0) {
                historyContent.innerHTML = "<p>Belum ada riwayat withdraw.</p>";
            } else {
                data.forEach(item => {
                    const div = document.createElement("div");
                    div.innerHTML = `
                        • ${item.amount} ke ${item.phone}
                        <br/><small>${new Date(item.date).toLocaleString()}</small>
                    `;
                    div.style.marginBottom = "10px";
                    historyContent.appendChild(div);
                });
            }

            historyPopup.style.display = "block";
        } catch (err) {
            console.error("Gagal mengambil riwayat:", err);
            showMessage("Gagal mengambil riwayat.");
        }
    });

    // ✅ Tutup popup riwayat
    closeHistory?.addEventListener("click", () => {
        historyPopup.style.display = "none";
    });

    // ✅ Kirim permintaan withdraw
    withdrawBtn?.addEventListener("click", async () => {
        const phone = document.getElementById("phone").value.trim();
        const amount = parseInt(document.getElementById("amount").value.trim(), 10);

        if (!phone || isNaN(amount) || amount < 1) {
            showMessage("Isi data withdraw dengan benar.");
            return;
        }

        try {
            const res = await fetch("/withdraw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_id: userId, phone, amount })
            });

            const result = await res.json();

            if (result.success) {
                showMessage("Permintaan withdraw dikirim.");
                withdrawForm.style.display = "none";
                document.getElementById("phone").value = "";
                document.getElementById("amount").value = "";
            } else {
                showMessage(result.message || "Withdraw gagal.");
            }
        } catch (err) {
            console.error("Withdraw error:", err);
            showMessage("Terjadi kesalahan saat withdraw.");
        }
    });

    // ✅ Utility: Tampilkan pesan ke user
    function showMessage(text) {
        if (!messageBox) return;
        messageBox.innerText = text;
        messageBox.style.display = "block";
        setTimeout(() => {
            messageBox.style.display = "none";
        }, 4000);
    }

    // ✅ Musik: 1 player, auto lanjut lagu
    const musicBtn = document.getElementById("toggleMusic");
    const playlist = [
        "assets/Cage.mp3",
        "assets/Tielle.mp3",
        "assets/Tranquility.mp3"
    ];

    const audioPlayer = new Audio();
    let currentTrack = 0;
    let isPlaying = false;

    audioPlayer.addEventListener("ended", () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        audioPlayer.src = playlist[currentTrack];
        audioPlayer.play();
    });

    musicBtn?.addEventListener("click", () => {
        if (!isPlaying) {
            audioPlayer.src = playlist[currentTrack];
            audioPlayer.play();
            musicBtn.textContent = "⏹️ Stop";
            isPlaying = true;
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            musicBtn.textContent = "🎵 Play";
            isPlaying = false;
            currentTrack = 0;
        }
    });
});
