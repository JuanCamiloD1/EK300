const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media1.tenor.com/images/96f5695ee4e8b075ba742f2b9c2eebdd/tenor.gif?itemid=16889331",
"https://tenor.com/view/detroit-become-human-connor-dbh-dbh-detroit-hug-gif-12976758",
"https://cdn.discordapp.com/attachments/736210396066611230/736215697423597680/15443effd8daced4714399851517.gif",
"https://cdn.discordapp.com/attachments/736210396066611230/736246627077062676/ezgif-5-33716611bdc0.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`Sending Hug ● ● ● <@${message.author.id}> `)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> Sending Hug ● ● ● <@${user.id}>`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }
