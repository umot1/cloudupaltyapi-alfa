const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let wenzycode = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${wenzycode.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0//kendi permlerinize göre ayarlayın
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız"
}