const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var embed = new Discord.RichEmbed()

    .setTitle(`:shield: __**Synthwave Sécurisé!**__`)
    .setThumbnail("https://images-ext-2.discordapp.net/external/oL0wupGsPduC9ZTRFp7PVetPE8VdxsHb26P2jvnp8pM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/773902764227952722/7c4993cef2b0133cf72de7e720dbf629.webp?width=369&height=369")
    .addField("**Protection :shield: **", "`antibot, antispam, botlist, locktime, blacklist`")
    .setFooter("Créateurs du bot : ! " X-Nozi#0777")
  
   
  
    message.channel.sendEmbed(embed);
    
}

module.exports.help = {
    name: "help"
}
