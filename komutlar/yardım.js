const Discord = require ("discord.js")

module.exports.run = async (client, message, args) => {

  const yardım = new Discord.MessageEmbed()
.setColor("#6d09e8")
.setDescription(`:joy: Botumuz İsteklerinizle Güzelleşiyor`)
.addField("️<a:tik:770701122972286996> v!yardim-kayit","Kayıt Sistemini Görürsünüz.",true)
.addField("<a:tik:770701122972286996> v!yardım-mod","Moderasyon Sistemini Görürsünüz.",true)
.addField("<a:tik:770701122972286996> v!yardım-eglence","Eğlence Sistemini Görürsünüz.",true)
.addField("<a:tik:770701122972286996> v!nsfw","NSFW Sistemini Görürsünüz.",true)
.addField("<a:tik:770701122972286996> v!davet","Botu Sunucunuza Davet Edersiniz",true)  
.addField(":joy: İninal Barkod NO: \`Yakında\` :joy:",true)
.addField(":joy: Papara Hesap NO: \`Yakında\` :joy:",true)  
    message.channel.send(yardım)

    
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help","h"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
