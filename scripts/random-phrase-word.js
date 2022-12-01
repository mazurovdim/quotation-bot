import { readFileSync } from 'fs'

const phaseArray = readFileSync('assets/quotations.txt','utf-8').split('\n')

export function x(searchText){
    let curMass = []
    for (let phrase of phaseArray){
        if(phrase.toLowerCase().includes(searchText.toLowerCase())){
            curMass.push(phrase)
        }
    }
    console.log(curMass)
    return console.log(curMass[Math.floor(Math.random() * curMass.length)])
}

x('братве')