function loadTelegramUser() {
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    document.getElementById('userName').textContent = user.first_name || 'Unknown User';
    document.getElementById('userID').textContent = user.username || 'No Username';
    document.getElementById('userAvatar').src = user.photo_url || 'assets/default-avatar.png';
}