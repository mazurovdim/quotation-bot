import axios from 'axios'
import cheerio from 'cheerio'
import { writeFileSync } from 'fs'

async function parseQuotations(){
    const response = await axios.get('https://citatnica.ru/citaty/krutye-tsitaty-dlya-patsanov-400-tsitat')
    const {data} = response
    const $ = cheerio.load(data)
    const buff = new Set
    $('.su-note-inner').each((index, div) => buff.add(div.children[0].data))
    writeFileSync('assets/quotations.txt', Array.from(buff).join('\n'))
}


parseQuotations()