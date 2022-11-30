import { Telegraf } from "telegraf";
import dotenv from 'dotenv'
import help from "./modules/help.js";
import start from "./modules/start.js";

const env = dotenv.config().parsed
const botToken = env.TELEGRAM_BOT_TOKEN
const bot = new Telegraf(botToken);

bot.start(async (context) => {
    bot.telegram.sendMessage(context.chat.id,{text: 'ffd'},{parse_mode: 'MarkdownV2'},
    {
        reply_markup:{
           keyboard:[
                [
                    {text:'Сгенерировать фразу', callback_data:'dima'}
                ]
            ],
            resize_keyboard:true
        },
        
    })
});

bot.help(help)

bot.launch();