const Discord = require('discord.js') 
const db = require('quick.db') 
exports.run = async (client, message, args) => { let uptime = await db.fetch(`premod_${message.guild.id}`) 
let uptimeYazi; 
if (uptime == null) uptimeYazi = ' Bu sunucuda premium mod aktif değil.' 
if (uptime == 'aktif') uptimeYazi = ' Bu sunucu için premium mod aktif.' 
if (uptime == 'deaktif') uptimeYazi = 'Bu sunucuda premium mod aktif değil.' 
const embed = new Discord.RichEmbed() 
.setTitle('Premium Kontrol') .setColor("BLUE") 
.setDescription(uptimeYazi) 
message.channel.send(embed) } 
exports.conf = { enabled: true, guildOnly: true, aliases: [], permLevel: 0, } 
exports.help = { name: 'premium-kontrol',
description: 'Premium Kontrol Eder.',
usage: 'premium-kontorol' }