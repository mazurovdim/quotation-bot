import {readFileSync} from 'fs'

export function quotationsFromFile(fileName = 'assets/quotations.txt'){
    const data = readFileSync(fileName, 'utf8')
    return Array.from(data.split('\n'))
}

quotationsFromFile()



