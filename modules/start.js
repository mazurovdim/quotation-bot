import { readFileSync } from 'fs'

export default function (){
    const text = readFileSync('./assets/start.md')
    return text + " "
}