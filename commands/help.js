const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var embed = new Discord.RichEmbed()

    .setTitle(`:shield: __**Someday sécurisé!**__`)
    .setThumbnail("https://image.noelshack.com/fichiers/2019/46/6/1573906701-helppp.png")
    .addField("**Protection :shield: **", "`antibot, antispam, botlist, locktime, blacklist`")
    .setFooter("Créateurs du bot : Douze#0001 et 𝐊𝐫𝐞𝐲#0666")
  
   
  
    message.channel.sendEmbed(embed);
    
}

module.exports.help = {
    name: "help"
}