const Discord = require("discord.js");
const client = new Discord.Client();
const DiscordAntiSpam = require("discord-anti-spam");

module.exports.run = async(bot, message, args) => {

const AntiSpam = new DiscordAntiSpam({
  warnThreshold: 7, // Nmbr de message avant le warn
  banThreshold: 12 , // Nmbr de message avant le Ban
  maxInterval: 2000, //le temps de ms considére
  warnMessage: "{@user}, Arrête de spam stp.", // message de warn
  banMessage: "**{user_tag}** a été bannis pour spam.", // Message de ban
  maxDuplicatesWarning: 7, // Dupli message warn
  maxDuplicatesBan: 15, // Dupli message BAn
  deleteMessagesAfterBanForPastDays: 1, 
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass des utilisateur admin .
  ignoreBots: true, // Ignorer le bot
  verbose: false, 
  ignoredUsers: [636888223179735061,362588749219102721,647117962079240202 ], //Id Bypass
  ignoredRoles: [], // Rôles bypass
  ignoredGuilds: [], // Serveur Bypass
  ignoredChannels: [] // Channel bypass

});
 
AntiSpam.on("warn", (member) => console.log(`Tentative de warn ${member.user.tag}.`));
AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} à été warn.`));
AntiSpam.on("kick", (member) => console.log(`Tentative de kick ${member.user.tag}.`));
AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} à été kick.`));
AntiSpam.on("ban", (member) => console.log(`Tentative de ban ${member.user.tag}.`));
AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} à été bannis.`));
AntiSpam.on("datareset", () => console.log("tout les warns et ban sont rénitialisés."));

 
client.on("ready", () => console.log(`Prêt.`));
 
client.on("message", (msg) => {
  AntiSpam.message(msg);
});

}
 
module.exports.help = {
    name: "antispam"
}