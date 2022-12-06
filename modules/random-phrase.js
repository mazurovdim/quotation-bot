import { readFileSync } from 'fs'
import  Emoji from "node-emoji";
const phaseArray = readFileSync('assets/quotations.txt','utf-8').split('\n')

function getRandomPhrase(arr = phaseArray){
    const rn = Math.floor(Math.random() * arr.length)
    return arr[rn]
}

export function getFromAll (context) {
    context.reply(getRandomPhrase()) 
}

export function getFiltered (context){
    const word = context.message.text
    const filtered = phaseArray.filter(phrase => phrase.toLowerCase().includes(word.toLowerCase()))
    if(!filtered.length) return context.reply(Emoji.emojify(':exclamation: Братуха, такую фразу еще не подвезли. Заходи завтра')) 
    context.reply(getRandomPhrase(filtered)) 
}

