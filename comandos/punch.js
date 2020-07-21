const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media1.tenor.com/images/e23875ce95b34b6d8653b277d46c2ff5/tenor.gif?itemid=12056382",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> golpeó a <@${user.id}> :0`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }