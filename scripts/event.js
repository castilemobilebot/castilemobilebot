// Event untuk tombol "Tonton Iklan +5"
document.querySelector('button[onclick="showRewardedAd()"]').addEventListener('click', showRewardedAd);

// Event untuk tombol "Withdraw"
document.querySelector('button[onclick="withdraw()"]').addEventListener('click', withdraw);

// Event untuk tombol "Riwayat Withdraw"
document.querySelector('button[onclick="viewHistory()"]').addEventListener('click', viewHistory);

// Event untuk tombol "Kembali ke Menu"
document.querySelector('button[onclick="goBack()"]').addEventListener('click', goBack);

console.log("Event listeners berhasil diatur.");
