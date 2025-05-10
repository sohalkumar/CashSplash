import os
import logging
from dotenv import load_dotenv

from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from telegram.ext import ApplicationBuilder, MessageHandler, filters, ContextTypes

# Load environment variables from .env file
load_dotenv() 

TG_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
WEB_APP_URL = os.getenv('WEBAPP_URL')

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    inline_keyboard = [
        [InlineKeyboardButton("Launch App", web_app=WebAppInfo(url=WEB_APP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(inline_keyboard)
    await update.message.reply_text(
        "Click the button below to start playing Cash Splash!",
        reply_markup=reply_markup
    )

app = ApplicationBuilder().token(TG_BOT_TOKEN).build()
app.add_handler(MessageHandler(filters.ALL, handle_message))
app.run_polling()