import { readFileSync } from 'fs'

const phaseArray = readFileSync('assets/quotations.txt','utf-8').split('\n')

export default () => {
    const randomPhraseNumber = Math.floor(Math.random() * phaseArray.length)
    console.log(randomPhraseNumber)
    return phaseArray[randomPhraseNumber]
}

