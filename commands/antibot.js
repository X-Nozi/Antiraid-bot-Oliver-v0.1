const Discord = require('discord.js')
client = new Discord.Client();

module.exports.run = async(client, message, args) => {

    client.on("guildMemberAdd", member => {

        if(member.user.bot) {
 
     member.ban()

    }
}

)
}

module.exports.help = {
     name: "antibot"
}