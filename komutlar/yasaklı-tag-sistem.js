const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Vex Yasaklı Tag Sistem').setDescription(`
\`${client.ayarlar.prefix}yasaklı-tag 🚀\`
Yasaklı **tagınızı** yada **simgenizi** koyarak aktif edersiniz

\`${client.ayarlar.prefix}yasaklı-tag-role [@rolEtiket]\`
**Yasaklı tag da bulunan kullanıcıya rolü verir**

\`${client.ayarlar.prefix}yasaklı-yeni-üye-role [@rolEtiket]\`
**Sunucunuza katılan yeni üye rolünü ayarlayınız**
\`\`\`Sıfırlama Komutları\`\`\`
\`${client.ayarlar.prefix}yasaklı-tag-role-sil \`
Ayarlamış olduğunuz **yasaklı tag** rolünü siler

\`${client.ayarlar.prefix}yasaklı-tag-kapat\`
**Ayarlı bulunan yasaklı tagınızı kapatır**

\`${client.ayarlar.prefix}yasaklı-yeni-üye-role-sil\`
**Ayarlı olan yeni üye rolünü kapatır**`).setImage('https://media.discordapp.net/attachments/759022175444926514/773963799978967080/350kb_1.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yasak-tag-sistem'
};