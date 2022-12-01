import { Telegraf, Markup } from "telegraf";
import dotenv from 'dotenv'
import help from "./modules/help.js";
import start from "./modules/start.js";
import { readFileSync } from 'fs'
import randomPhrase from './modules/random-phrase.js'

const env = dotenv.config().parsed
const botToken = env.TELEGRAM_BOT_TOKEN
const bot = new Telegraf(botToken);

bot.use(start)

bot.hears('Сгенерировать фразу', randomPhrase)

bot.help(help)

bot.launch();