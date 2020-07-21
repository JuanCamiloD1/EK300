const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://66.media.tumblr.com/38e6a2b20929d57e93a09eb777e8a99f/tumblr_pk0e2vR5y91rbnkefo5_500.gifv",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> besó a <@${user.id}> :3 :heart:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }