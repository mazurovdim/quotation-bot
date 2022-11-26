import { readFileSync } from 'fs'

export default function (context){
    const text = readFileSync('./assets/start.md')
    context.replyWithMarkdown(text + '')
}