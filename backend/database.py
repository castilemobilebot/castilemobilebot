from pymongo import MongoClient
import os

# Koneksi ke database MongoDB
DATABASE_URL = os.getenv("DATABASE_URL")
client = MongoClient(DATABASE_URL)
db = client.telegram_bot

def add_user(user_id, first_name, username):
    user_data = {
        "user_id": user_id,
        "first_name": first_name,
        "username": username,
        "balance": 0.0,
        "ads_count": 0
    }
    db.users.insert_one(user_data)

def update_balance(user_id, amount):
    db.users.update_one({"user_id": user_id}, {"$inc": {"balance": amount}})

def get_user(user_id):
    return db.users.find_one({"user_id": user_id})