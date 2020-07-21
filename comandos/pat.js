const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.tenor.com/images/3768a9bfac80ec14257538c3b6bb9ad3/tenor.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> acarició a <@${user.id}> :3 :blush:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }