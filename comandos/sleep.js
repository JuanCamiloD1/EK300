const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://cdn.discordapp.com/attachments/736210484746780672/736230853058756698/unknown.png",
"https://cdn.discordapp.com/attachments/736210484746780672/736230386534973510/unknown.png",
"https://cdn.discordapp.com/attachments/736210484746780672/736229321475358790/unknown.png",
"https://cdn.discordapp.com/attachments/736210484746780672/736221240527945728/691c3d756ab0edd9ad6b402b897d8dfb.gif",
"https://cdn.discordapp.com/attachments/736210484746780672/736218757420154990/unknown.png",
"https://cdn.discordapp.com/attachments/736210484746780672/736218628587782214/unknown.png",
"https://cdn.discordapp.com/attachments/736210484746780672/736218063627878450/JPEG_20200721_100137.png",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`<@${message.author.id}> Se va a momir :sleeping: :sleeping_accommodation: :zzz:`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> se va a momir junto a <@${user.id}> :sleeping: :sleeping_accommodation: :zzz:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }
