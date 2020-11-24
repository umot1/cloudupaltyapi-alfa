const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const main = require('../main.json');
var prefix = main.prefix;

module.exports = async client => {
  
  client.user.setPresence({ activity: { name: `Vex Bot @ALFA#9209`, type: "STREAMING", url: "https://discord.gg/cN" } })
  client.user.setStatus("online");
  console.log("Aktif!")
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 