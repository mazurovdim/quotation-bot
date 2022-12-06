import { readFileSync } from 'fs'
import { Markup } from 'telegraf'
import  Emoji from "node-emoji";

export default (context) => {
     const text = readFileSync('assets/start.md','utf8')
     context.replyWithMarkdownV2(Emoji.emojify(text), Markup.keyboard(['Выбрать фразу']).resize())
};