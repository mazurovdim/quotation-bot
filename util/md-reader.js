const fs = require('fs');
const emojify = require('node-emoji').emojify;

module.exports = (fn)=> {
    let path = `./documents/${fn}${!/\.js$/.test(fn) && '.md'}`
    if(/\.js$/.test(fn)){
        fn = /(.*\/)([a-zA-Z\-\\]+)(\.js)/.exec(fn)[2].replace('\\', '/')
        path = `${__filename.replace(/[^\/]+$/, '../documents/')}${fn}.md`
    }
    let txt = fs.readFileSync(path, 'utf8')
    txt = txt.split('\n').map(el => {
        if(el.trim() == '<br>') return '\n'
        if(/^\#/.test(el)) return `*${el.replace(/^\#+/, '').toUpperCase()}*`
        let liReg = /^\d+\.\ /
        if(liReg.test(el)) return el.replace(liReg, ':small_orange_diamond: ')
        liReg = /^\*\ /
        if(liReg.test(el)) return el.replace(liReg, ':small_blue_diamond: ')
        return el
    }).join('\n')
    return emojify(txt)
}

