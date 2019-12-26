const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        fs.readFile("./blackList.json", (err, data) => {
            if (!err) {
                var blackList = JSON.parse(data);
                if (args[0] === "add") {
                    if (msg.mentions.length === 1) {
                        if (blackList.indexOf(msg.mentions[0].id) === -1) {
                            var addedUser = util.format("%s#%s", msg.mentions[0].username, msg.mentions[0].discriminator);
                            blackList.push(msg.mentions[0].id);
                            var newBlackList = JSON.stringify(blackList);
                            fs.writeFile("./blackList.json", newBlackList, (writeErr) => {
                                if (!writeErr) {
                                    bot.sendMessage(msg, "Blacklister " + addedUser);
                                }
                            });
                        } else if (blackList.indexOf(msg.mentions[0].id) > -1) {
                            bot.sendMessage(msg, "Déja Blacklister.");
                        }
                    } else if (msg.mentions.length !== 1) {
                        bot.sendMessage(msg, "Mentionne une personne.");
                    }
                } else if (args[0] === "remove") {
                    if (msg.mentions.length === 1) {
                        if (blackList.indexOf(msg.mentions[0].id) > -1) {
                            var removedUser = util.format("%s#%s", msg.mentions[0].username, msg.mentions[0].discriminator);
                            delete blackList[msg.mentions[0].id];
                            var newBlackList = JSON.stringify(blackList);
                            fs.writeFile("./blackList.json", newBlackList, (writeErr) => {
                                if (!writeErr) {
                                    bot.sendMessage(msg, "n'est plus Blacklister" + removedUser);
                                }
                            });
                        } else if (blackList.infexOf(msg.mentions[0].id) === -1) {
                            bot.sendMessage(msg, "N'est pas blacklister.")
                        }
                    } else if (msg.mentions.length !== 1) {
                        bot.sendMessage(msg, "Mentionner une personne.");
                    }
                } else {
                    bot.sendMessage(msg, "L'utilisateur n'existe pas.")
                }
            }
        });
}

module.exports.help = {
    name: "blacklist"
}