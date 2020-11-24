const Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')

exports.run = async (client, message, args) => { 
  
  let guild = message.guild
  
 let chyper = new MessageEmbed()
 .setThumbnail(guild.iconURL)
 .setFooter(guild.name)
 .addField('Sunucu İsmi', guild.name)
 .addField('Kuruluş', guild.createdAt)
 .addField('Kurucu', `/ ID = <${guild.ownerID}>`)
 .addField('Üye Sayısı', guild.memberCount)
 .setTimestamp()
 
 message.channel.send(chyper)
}

exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: ["sb"],
    permLevel: 0,
}

exports.help = {
    name: 'sunucubilgi', 
    description: 'Sunucu Hakkında Bilgi Verir',
    usage: 'sunucubilgi'
}  