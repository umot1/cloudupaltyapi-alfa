const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Vex Kısıtlı Koruma')
.addField("️:tools: v!fal","Dene Ve Gör",true)
.addField(":tools: v!aşk","Dene Ve Gör",true)
.addField(":tools: v!soda","Dene Ve Gör",true)
.addField(":tools: v!tokat","Dene Ve Gör",true)   
.addField("️:tools: v!kare","Dene Ve Gör",true)
.addField(":tools: v!öp","Dene Ve Gör",true)
.addField(":tools: v!karıştır","Dene Ve Gör",true)
.addField(":tools: v!kaçcm","Dene Ve Gör",true)                      
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'botresim'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardim-eğlence","yardım-eglence","yardim-eglence"],
  permLevel: 0
}

exports.help = {
  name: 'yardım-eğlence'
};