import { readFileSync } from 'fs'
import  Emoji from "node-emoji";
import { Markup } from 'telegraf';
const likes = new Map()
const phaseArray = readFileSync('assets/quotations.txt','utf-8').split('\n')

export function addLike(phrase){
    if(likes.has(phrase)){
        let count = +likes.get(phrase)
        likes.set(phrase, ++count)
        return +likes.get(phrase)
    }else{
        likes.set(phrase, 1)
        return +likes.get(phrase)
    }
}

function getRandomPhrase(arr = phaseArray){
    const rn = Math.floor(Math.random() * arr.length)
    return arr[rn]
}

export function getFromAll (context) {
    context.reply(getRandomPhrase(), Markup.inlineKeyboard([
        Markup.button.callback('Запала в душу? Смело нажимай!','like')
    ]))
}

export function getFiltered (context){
    const word = context.message.text
    const filtered = phaseArray.filter(phrase => phrase.toLowerCase().includes(word.toLowerCase()))
    if(!filtered.length) return context.reply(Emoji.emojify(':exclamation: Братуха, такую фразу еще не подвезли. Заходи завтра'))
    context.reply(getRandomPhrase(filtered), Markup.inlineKeyboard([
        Markup.button.callback('Запала в душу? Смело нажимай!','like')
    ])) 
}

