import { Telegraf } from "telegraf";

const bot = new Telegraf('5850978865:AAGxykvAeHcEMbebiu1HrFbHait3lP0O4EI');

bot.start((ctx) => ctx.reply('Привет. Пацанская цитата дня ждет тебя!'));

bot.on('text',ctx => {
    ctx.reply(`Ьы написал "${ctx.message.text}!"`)
})



bot.launch();