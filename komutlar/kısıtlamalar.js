const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Vex Kısıtlı Koruma')
.addField("️:tools: v!selam aç/kapat","Selam karşılama sistemini ayarlarsınız.",true)
.addField(":tools: v!küfür aç/kapat","Küfür Kısıtlamak.",true)
.addField(":tools: v!reklam aç/kapat","Reklam Kısıtlamak",true)
.addField(":tools: v!caps aç/kapat","Büyük Harf Kısıtlamak",true)       
.addField("️:tools: v!mute-sistem","Chat ve Seste mute için güzel sistem",true)
.addField(":tools: v!jail-sistem","Etiketlediğiniz Üyeyi karantina altına al",true)
.addField(":tools: v!ban-sistem","Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız",true)    
.addField(":tools: v!komut-mesaj-sistem","Sunucunuz için istediğiniz kadar **komut & **cevap** oluşturabilirsin",true)   
.addField(":tools: v!fake-hesap-sistem","unucunuza giren kullanıcı __5 gün__ içerisin de hesabını oluşturmuş ise cezalı verir",true)                        
.addField(":tools: v!sunucu-tema-sistem","Topluluk bağışları ile sunucu şablonlarına sahip ol!",true)
.addField(":tools: v!kanal arındır","Sunucunuzda ki tüm **Kanalları** silerek yardımcı olur (**Sunucu Sahibi**)",true)
.addField(":tools: v!rol arındır","Sunucunuzda ki tüm **Rolleri** silerek yardımcı olur (**Sunucu Sahibi**)",true)
.addField(":tools: v!oylama","Oylama Yapar",true)                     
                     
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