const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Açmak ve kapatmak için: [ -seviye aç / -seviye kapat ]').setDescription('>>> `v!rank` `v!rank [@Etiket]` `(v!seviye - v!level)`\n`v!sıralama` `(v!top - v!toplist)`'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seviye'],
  permLevel: 0
}

exports.help = {
  name: 'seviye-sistem'
};