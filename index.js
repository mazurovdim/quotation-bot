import { Telegraf, Telegram } from "telegraf";
import dotenv from 'dotenv'
import help from "./modules/help.js";
import start from "./modules/start.js";

const env = dotenv.config().parsed
const botToken = env.TELEGRAM_BOT_TOKEN
const bot = new Telegraf(botToken);
const telegram = new Telegram(botToken, {
    agent: null,        // https.Agent instance, allows custom proxy, certificate, keep alive, etc.
    webhookReply: true  // Reply via webhook
  })

bot.start();

bot.command('gg', context => {
    bot.telegram.sendMessage(context.chat.id, 'Найти филосовскую фразу?', 
    {
        reply_markup:{
           inline_keyboard:[[{text:'Da', callback_data:'zzz'},{text:'Net', callback_data:'bbb'}]]
        }
            
    })
})

bot.help(help)


bot.launch();