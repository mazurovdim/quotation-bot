import { Telegraf } from "telegraf";
import dotenv from 'dotenv'
import help from "./modules/help.js";

const env = dotenv.config().parsed
const botToken = env.TELEGRAM_BOT_TOKEN
const bot = new Telegraf(botToken);

bot.start((ctx) => ctx.reply('Привет. Пацанская цитата дня ждет тебя!'));
bot.help(help)
// bot.on('text',ctx => {
//     ctx.reply(`Ьы написал "${ctx.message.text}!"`)
// })

bot.launch();