const chalk = require('chalk')
const moment = require('moment')
const kanal = '780769475413803010'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`@ALFA#9209`},status: 'online'})
    log(chalk.green(`[BOT] Aktif, Komutlar Yüklendi ${tarih}`))
  }

//SAFE CODE ❤ #1.5K

//SALVO CODE ❤ #1.6K

//GÜLE GÜLE KULLAN DOSTUM :) ❤ 