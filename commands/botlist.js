const Discord = require('discord.js');

exports.run = (client, message, args) => {
       if(!message.member.hasPermission("ADMINISTRATOR")){ return message.channel.send(":error_mys: | **Tu n'as pas la permission.**"); }

        let bots = message.guild.members.filter(m => m.user.bot).size;
        let noms = message.guild.members.filter(m => m.user.bot).map(m => `\`${m.user.tag} ➺ ${m.user.id}\``).join("\n");
        
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Nombre de bots: ${bots}`)
        .setDescription(noms)
        .setFooter('Détecteur de bots.')
        message.channel.send(embed)
    }


module.exports.help = {
    name: "botlist"
}