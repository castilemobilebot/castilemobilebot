// **Webapp Script untuk Castile Mobile Bot**
console.log("webapp.js berhasil dimuat!");

document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
        console.warn("Telegram WebApp tidak tersedia. Kemungkinan dibuka di luar Telegram.");
        return;
    }

    // Aktifkan mode layar penuh
    tg.expand();

    // Konfigurasi default tombol utama Telegram (tidak tampil dulu)
    tg.MainButton.setParams({
        text: "Castile Mobile Bot",
        color: "#0073e6",
        text_color: "#ffffff",
        is_visible: false,
        is_active: false
    });

    // Fungsi tampilkan tombol utama
    function showMainButton(text = "Lanjutkan") {
        tg.MainButton.setText(text);
        tg.MainButton.show();
        tg.MainButton.enable();
    }

    // Fungsi sembunyikan tombol utama
    function hideMainButton() {
        tg.MainButton.hide();
        tg.MainButton.disable();
    }

    // Fungsi ubah teks tombol utama
    function updateMainButtonText(text) {
        tg.MainButton.setText(text);
    }

    // Fungsi ubah warna tombol utama
    function setMainButtonColor(color = "#0073e6", textColor = "#ffffff") {
        tg.MainButton.setParams({
            color,
            text_color: textColor
        });
    }

    // Ekspor ke global supaya bisa diakses dari file JS lain
    window.TelegramUI = {
        tg,
        showMainButton,
        hideMainButton,
        updateMainButtonText,
        setMainButtonColor
    };

    // Bisa diaktifkan manual kalau ingin langsung munculkan tombol
    // showMainButton("Mulai Sekarang");
});
