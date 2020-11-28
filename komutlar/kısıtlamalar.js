const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('VTR Kısıtlı Koruma')
.addField("️<a:tik:770701122972286996> v!selam aç/kapat","Selam karşılama sistemini ayarlarsınız.",true)
.addField("<a:tik:770701122972286996> v!küfür aç/kapat","Küfür Kısıtlamak.",true)
.addField("<a:tik:770701122972286996> v!reklam aç/kapat","Reklam Kısıtlamak",true)
.addField("<a:tik:770701122972286996> v!caps aç/kapat","Büyük Harf Kısıtlamak",true)       
.addField("️<a:tik:770701122972286996> v!mute-sistem","Chat ve Seste mute için güzel sistem",true)
.addField("<a:tik:770701122972286996> v!jail-sistem","Etiketlediğiniz Üyeyi karantina altına al",true)
.addField("<a:tik:770701122972286996> v!ban-sistem","Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız",true)    
.addField("<a:tik:770701122972286996> v!komut-mesaj-sistem","Sunucunuz için istediğiniz kadar **komut & **cevap** oluşturabilirsin",true)   
.addField("<a:tik:770701122972286996> v!fake-hesap-sistem","unucunuza giren kullanıcı __5 gün__ içerisin de hesabını oluşturmuş ise cezalı verir",true)                        
.addField("<a:tik:770701122972286996> v!sunucu-tema-sistem","Topluluk bağışları ile sunucu şablonlarına sahip ol!",true)
.addField("<a:tik:770701122972286996> v!kanal arındır","Sunucunuzda ki tüm **Kanalları** silerek yardımcı olur (**Sunucu Sahibi**)",true)
.addField("<a:tik:770701122972286996> v!rol arındır","Sunucunuzda ki tüm **Rolleri** silerek yardımcı olur (**Sunucu Sahibi**)",true)
.addField("<a:tik:770701122972286996> v!oylama","Oylama Yapar",true)                     
                     
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'botresim'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardim-mod","ym"],
  permLevel: 0
}

exports.help = {
  name: 'yardım-mod'
};