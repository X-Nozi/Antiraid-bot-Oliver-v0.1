const Discord = require ("discord.js");
const bot = new Discord.Client();
var prefix = "/";
const ownerID = `642694924847808512`
const map = new Map();
const fs = require ("fs");
bot.commands = new Discord.Collection();



const config = require("./config.json");

client.on("guildMemberAdd", member => {

        if(member.user.bot) {
 
     member.ban()

    }


fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    console.log(`${files.length} commands`);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("commands non trouvée.");
        return;

    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    })
})

bot.on("ready", function() {
  bot.user.setActivity("Someday sécurisé!", {
    type: 'STREAMING',
    url: "https://www.twitch.tv/SOMEDAY"
});

 

});

bot.login(process.env.token);

bot.on("message", async message => {
  if(message.content ==="podkpdokpdkekdpjk"){
    message.reply("Salut toi !");
    console.log("Salut toi ! commande effectuée")
  }





    bot.emit("checkMessage", message);

    const prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const commandeFile = bot.commands.get(cmd);
        if(commandeFile) commandeFile.run(bot, message, args);

        db.add(`globalMessages_${message.author.id}`, 1);

        db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)





    });

  });
