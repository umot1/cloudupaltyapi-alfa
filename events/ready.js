const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const arroiz = require('../arroiz/arroiz.json');
var prefix = arroiz.prefix;

module.exports = async client => {
  
  client.user.setPresence({ activity: { name: `Vex V12 Uptime Botu`, type: "STREAMING", url: "TWİTCH URL" } })
  client.user.setStatus("online");
  console.log("Aktif!")
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 