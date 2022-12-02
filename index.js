import { Telegraf } from "telegraf";
import dotenv from 'dotenv'
import help from "./modules/help.js";
import start from "./modules/start.js";
import { getFromAll, getFiltered } from './modules/random-phrase.js'
import  Emoji from "node-emoji";

const env = dotenv.config().parsed
const botToken = env.TELEGRAM_BOT_TOKEN
const bot = new Telegraf(botToken);


bot.start(start)

bot.hears('Сгенерировать фразу', getFromAll)
bot.hears(/[А-Яа-яЁё]+/, getFiltered)
bot.hears(/[A-Za-z0-9\W]+/, (ctx)=> ctx.reply(Emoji.emojify(':cop: Братуха, на пендосском не понимаем! :cop:')))

bot.help(help)

bot.launch();