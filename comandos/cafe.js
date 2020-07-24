const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://cdn.discordapp.com/attachments/736210412630179972/736216755814531123/coffee-cafe-coffee-shop-latte-thumb.jpg",
"https://cdn.discordapp.com/attachments/736210412630179972/736216758519595038/DBo_i9BU0AIYC1k.jpg",
"https://cdn.discordapp.com/attachments/736210412630179972/736216767206129744/giphy.gif",
"https://cdn.discordapp.com/attachments/736210412630179972/736216772377575454/tumblr_mjtwwv2PDv1qb4r50o1_500.gif",
"https://cdn.discordapp.com/attachments/736210412630179972/736216821270577275/0bc5d7addbad0d14ef87d261b903968f.gif",
"https://cdn.discordapp.com/attachments/736210412630179972/736216824961695824/8d7c255f5d0eebb019f579174f8f0fed.gif",
"https://cdn.discordapp.com/attachments/736210412630179972/736216825624526978/52d85e_497325cf2f3548848ec07fad7d7b5526_mv2.gif",
"https://cdn.discordapp.com/attachments/736210412630179972/736222160128835774/09e8ab61088bc2d79eff1459d6fe4f73.gif",
"https://cdn.discordapp.com/attachments/736210412630179972/736222025592471642/RectangularCavernousFlyingfox-size_restricted.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`Solo ? ;-;, te mando un café a ti :coffee:`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> le envió un café a <@${user.id}> :coffee:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }
