const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("u.u, solo? ;-; , te mando una hamburguesa :hamburger: :3");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> le mandó una hamburguesa a <@${user.id}> :hamburger:`)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }