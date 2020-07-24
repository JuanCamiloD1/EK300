const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://cdn.discordapp.com/attachments/736212489909567493/736251677228793936/WelllitLegalAlpinegoat-size_restricted.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736248181461090355/giphy_7.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736243760555360356/giphy_5.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736241858287632412/giphy_4.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736240268306677800/giphy_3.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736238835666649128/giphy_2.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736236775776714892/giphy_1.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736234212646191104/DistantBlandLarva-size_restricted.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736233845011251210/15464198b550ea33395763758913.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736233788580954132/HollowDelayedBinturong-size_restricted.gif",
"https://cdn.discordapp.com/attachments/736212489909567493/736232849958764655/d60067f12cf0f864d0289a84eec86254.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> golpeó a <@${user.id}> :punch:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }
