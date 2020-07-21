const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media1.tenor.com/images/96f5695ee4e8b075ba742f2b9c2eebdd/tenor.gif?itemid=16889331",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> abrazó a <@${user.id}> :blush:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }