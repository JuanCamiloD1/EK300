const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media1.tenor.com/images/96f5695ee4e8b075ba742f2b9c2eebdd/tenor.gif?itemid=16889331",
"https://media1.tenor.com/images/0d3a4455d364ce9657c788d5a7ef2a04/tenor.gif?itemid=16069142",
"https://media1.tenor.com/images/fdb5a6f9a840f46aec8798c59b503194/tenor.gif?itemid=16077788",
"https://media1.tenor.com/images/235fb9de3fbb27524fef51c58219b6c2/tenor.gif?itemid=16844445",
"https://media1.tenor.com/images/fbcab5310fc22042dd5630fe6041e0e5/tenor.gif?itemid=16616775",
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
