import { readFileSync } from 'fs'

export default (context) => {
    const phaseArray = readFileSync('assets/quotations.txt','utf-8').split('\n')
    const randomPhraseNumber = Math.floor(Math.random() * phaseArray.length)
    context.reply(phaseArray[randomPhraseNumber]) 
}

