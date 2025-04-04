console.log("event.js berhasil dimuat!");

// Event listener untuk tombol "Tonton Iklan +5"
document.querySelector('button[onclick="showRewardedAd()"]').addEventListener('click', showRewardedAd);

// Event listener untuk tombol "Withdraw"
document.querySelector('button[onclick="withdraw()"]').addEventListener('click', withdraw);

// Event listener untuk tombol "Riwayat Withdraw"
document.querySelector('button[onclick="viewHistory()"]').addEventListener('click', viewHistory);

// Event listener untuk tombol "Kembali ke Menu"
document.querySelector('button[onclick="goBack()"]').addEventListener('click', goBack);

console.log("Event listeners berhasil diatur.");
