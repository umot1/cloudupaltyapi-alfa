const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`@ALFA#9209`},status: 'online'})
    log(chalk.green(`[BOT] Aktif, Komutlar Yüklendi ${tarih}`))
  }

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 