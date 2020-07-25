const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media1.tenor.com/images/e8bbbb3c7830830fecba7543937aeb7d/tenor.gif?itemid=12227064",
"https://media1.tenor.com/images/f84f53bbce55dda0340aacf91ca4fb34/tenor.gif?itemid=13154829",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`No subestimes mi puntería`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> disparó a <@${user.id}>`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }

