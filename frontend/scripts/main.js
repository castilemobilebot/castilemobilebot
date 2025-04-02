function showRewardedAd() {
    const userId = window.Telegram.WebApp.initDataUnsafe.user.id;

    fetch('/api/updateBalance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, action: 'watchAd' })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            const adsCount = document.getElementById('ads-count');
            const balance = document.getElementById('balance');
            adsCount.textContent = Number(adsCount.textContent) + 5;
            balance.textContent = (parseFloat(balance.textContent) + 0.005).toFixed(3);
            alert(data.message);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan.');
    });
}