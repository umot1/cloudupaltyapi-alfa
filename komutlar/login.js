const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage('').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}login kur / kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(args[0] === 'kur') {
  if(!message.mentions.channels.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setTitle('Bir hata oldu!').setDescription('Bir kanal etiketlemeyi unuttunuz.'));
  let mentionChannel = message.mentions.channels.first()
  data.set(`login.ch.${message.guild.id}`, mentionChannel.id);
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription(`Kayıt mesaj sistemi başarıyla ${mentionChannel} kanalı olarak seçtiniz.`)
  .addField('Temalar', '**Mesaj temasının gifini değiştirmek için:** ```'+client.ayarlar.prefix+'TEMA-1 kur , '+client.ayarlar.prefix+'TEMA-2 kur```\n**Kanal etiketleyerek herhangi birisini aktif edersiniz.**'));
  } else if(args[0] === 'kapat') {
  data.delete(`login.ch.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription('Kayıt mesaj sistem kanalı başarıyla kapatıldı.'))
  }

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'login'
};