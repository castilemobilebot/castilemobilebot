const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Endpoint untuk memperbarui saldo pengguna
app.post('/api/updateBalance', async (req, res) => {
    const { userId, action } = req.body;

    if (action === 'watchAd') {
        // Tambahkan logika Telegram API untuk mengirim pesan
        const response = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: userId,
                text: 'Anda mendapatkan Rp 0.005 setelah menonton iklan!'
            })
        });

        if (response.ok) {
            res.status(200).send({ status: 'success', message: 'Saldo diperbarui.' });
        } else {
            res.status(500).send({ status: 'error', message: 'Gagal memperbarui saldo.' });
        }
    } else {
        res.status(400).send({ status: 'error', message: 'Aksi tidak dikenal.' });
    }
});

app.listen(3000, () => console.log('API berjalan di port 3000'));