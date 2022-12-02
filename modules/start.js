import { readFileSync } from 'fs'
import { Composer, Markup } from 'telegraf'
const composer = new Composer()

// export default composer.start(context => {
//     const text = readFileSync('assets/start.md','utf8')
//     context.replyWithMarkdownV2(text, Markup.keyboard(['Сгенерировать фразу']).resize())
// });

export default (context) => {
     const text = readFileSync('assets/start.md','utf8')
     context.replyWithMarkdownV2(text, Markup.keyboard(['Сгенерировать фразу']).resize())
};