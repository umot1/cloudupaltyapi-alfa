const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription('Başvurunuz Gönderildi En Kısa Sürede <#773205695729762324> Kanalından Cevap Vereceğiz!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** İsimli Kullanıcı Yetki Başvurusu Yaptı`)
.addField("Başvuru Yapan Kişi", `Kullanıcı: <@!${message.author.id}>\n Kullanıcı ID: \`${message.author.id}\` \n Kullanıcı Adı: \`${message.author.username}#${message.author.discriminator}\``)
client.channels.cache.get('773205695729762324').send(embed2); 
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["basvuru","yetkili","yetki"],
    permLevel: 0
}

exports.help = {
    name: 'başvuru',
    description: 'Yetki Başvurusu Yaparsınız.',
    usage: 'başvuru'
}

//SAFE CODE ❤ #1.5K

//SALVO CODE ❤ #1.6K

//GÜLE GÜLE KULLAN DOSTUM :) ❤ 