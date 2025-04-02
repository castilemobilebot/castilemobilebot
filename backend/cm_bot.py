import os
import telegram
from telegram.ext import Updater, CommandHandler
from database import add_user, get_user

BOT_TOKEN = os.getenv("BOT_TOKEN")

def start(update, context):
    user = update.message.from_user
    add_user(user.id, user.first_name, user.username)
    update.message.reply_text(f"Selamat datang, {user.first_name}! Gunakan /webapp untuk membuka WebApp.")

def webapp(update, context):
    user = get_user(update.message.from_user.id)
    webapp_url = os.getenv("WEBAPP_URL")
    update.message.reply_text(
        f"Buka WebApp Anda di sini: {webapp_url}",
        reply_markup=telegram.InlineKeyboardMarkup([
            [telegram.InlineKeyboardButton("Buka WebApp", url=webapp_url)]
        ])
    )

updater = Updater(BOT_TOKEN, use_context=True)
updater.dispatcher.add_handler(CommandHandler("start", start))
updater.dispatcher.add_handler(CommandHandler("webapp", webapp))
updater.start_polling()