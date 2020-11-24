const Discord = require ("discord.js")

module.exports.run = async (client, message, args) => {

  const YeniYardımMenüm = new Discord.MessageEmbed()
.setColor("#6d09e8")
.setDescription(`:joy: Botumuz İsteklerinizle Güzelleşiyor`)
.addField(":tools: v!kayıt-mesaj","Kayıt kanalında ki üyeleri karşılayan sistem",true)
.addField(":tools: v!sunucu-kayıt","İsimli ve etiket ile (Erkek - Kadın) kayıt sistem",true)
.addField(":tools: v!mesaj-tag","Tag ayarlamak için kullanımı basit sistem",true)
.addField(":tools: v!tagrol-sistem","Tagınızı Alana Rol Verir(Beta)",true)
.addField(":tools: v!isim","İsmin başına birşey ekletmek için **v!isim-tag** kullanabilirsin. Etiketlediğiniz **üyenin ismini** değişirsiniz)",true)
.addField(":tools: v!say","Sunucu Bilgierinizi Sayar.",true)  
.addField(":tools: v!koruma aç/kapat","Sunucunuz için koruma sistem aktif edersin",true)
.addField(":tools: v!aktiflik aç/kapat","(v!profile & v!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin",true)  
.addField(":tools: v!sayaç-sistem","(v!profile & v!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin",true) 
.addField(":tools: v!aktiflik aç/kapat","(v!profile & v!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin",true)   
.addField("️:tools: v!toplu-rol-sistem"," Toplu Rol Sistemini Görürsünüz.",true) 
.addField("️:tools: v!yasak-tag-sistem","Sunucunuz için güvenliği arttırın.",true)  
.addField("️:tools: v!oto-isim-sistem","Sunucunuza giren kullanıcıya istediğiniz şekilde otomatik isim ile adlandırmış yapabilirsin.",true)  
.addField("️:tools: v!toplu-rol-sistem"," Kayıt Sistemini Görürsünüz.",true)    
  
    message.channel.send(YeniYardımMenüm)

    
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-kayit","yardim-kayit","yardım-kayıt"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardim-kayıt',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
