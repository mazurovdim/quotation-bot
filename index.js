import { Telegraf, Markup } from "telegraf";
import dotenv from 'dotenv'
import help from "./modules/help.js";
import start from "./modules/start.js";
import { getFromAll, getFiltered, addLike } from './modules/random-phrase.js'
import  Emoji from "node-emoji";

const env = dotenv.config().parsed
const botToken = env.TELEGRAM_BOT_TOKEN
const bot = new Telegraf(botToken);

bot.use(async (ctx, next) =>{
    ctx.addLike = addLike
    await next()
})

bot.start(start)
bot.help(help)

bot.hears('Выбрать фразу', getFromAll)
bot.hears(/[А-Яа-яЁё]+/, getFiltered)
bot.hears(/[A-Za-z0-9\W]+/, (ctx)=> ctx.reply(Emoji.emojify(':point_up_2: Братуха, на пендосском не понимаем!')))
bot.action('like',async (ctx) => {
    await ctx.answerCbQuery()
    await ctx.editMessageReplyMarkup(
            {
                inline_keyboard: [[Markup.button.callback(`${Emoji.emojify(':heart:')} ${ctx.addLike(ctx.callbackQuery.message.text)}`,'like')]]
            }
        )
})

bot.launch();