import { readFileSync } from 'fs'
import  Emoji from "node-emoji";

export default function (context){
    const text = readFileSync('./assets/help.md','utf-8')
    context.replyWithMarkdownV2(Emoji.emojify(text))
}