const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");
const ms = require("ms")

exports.run = (client, message, args) => {


        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Oops | Vous n'avez pas la permission d'utiliser cette commande")
      if(!client.lockit) client.lockit = [];
      let time = args.join(' ');
      let validUnlocks = ['unlock'];
      if(!time) return message.channel.send(' :timer: | Vous devez entrer un temps !')
  
      if(validUnlocks.includes(time)) {
          message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
          }).then(() => {
              message.channel.sendMessage(' :ok: | Le salon est déverrouillé !'); 
           
              clearTimeout(client.lockit[message.channel.id]);
              delete client.lockit[message.channel.id];
            
          }).catch(error => {
              console.log(error);
          });
      
      } else {
          message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
          }).then(() => {
              message.channel.sendMessage(`:lock: | Vous venez de verrouiller le salon pour ${ms(ms(time), { long:true})}`)
              let channel = message.guild.channels.get('635879060848902145');
              let t = new RichEmbed()
                  .setAuthor(`Salon vérouiller  !`)
                  .addField('Modérateur', `\`${message.author.tag}\` (${message.author.toString()})`, true)
                  .addField("Salon", message.channel, true)
                  .addField('Temps', time, true)
                  .setTimestamp()
                  .setColor("RANDOM");
              channel.send(t).then(() => {
                  client.lockit[message.channel.id] = setTimeout(() => {
                      message.channel.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: true
                      }).then(message.channel.sendMessage(' :lock: | Le salon est déverrouillé !')).catch(console.error);
                      delete client.lockit[message.channel.id];
                      let channel = message.guild.channels.get('635879060848902145');
                let embed = new RichEmbed()
                    .setAuthor(`Salon dévérouiller  !`)
                    .addField('Modérateur', `\`${message.author.tag}\` (${message.author.toString()})`, true)
                    .addField("Salon", message.channel, true)
                    .setTimestamp()
                    .setColor("RANDOM");
                channel.send(embed);
                  }, ms(time));
              }).catch(error => {
                  console.log(error)
              })
          })
      }

    }

      module.exports.help = {
          name: "locktime"
      }
