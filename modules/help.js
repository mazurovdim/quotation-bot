import {readFileSync} from 'fs'

export default function (context){
    const text = readFileSync('./assets/help.md','utf-8')
    context.replyWithMarkdown(text)
}