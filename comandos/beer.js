const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("u.u, solo? ;-; , te mando un trago yo :beer: :3");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> le mandó un trago a <@${user.id}> :beers:`)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }