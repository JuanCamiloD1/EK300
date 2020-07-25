const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.discordapp.net/attachments/486566431689932801/538801766226198538/25896cb06fe008058c349f22d1d55415f7cbe235r1-404-720_hq.gif",
"https://media1.tenor.com/images/b457c4ca9ee09f17f3dc77fef5365a6b/tenor.gif?itemid=17650943",
"https://media.giphy.com/media/hW9uswD4XcxwMqAdXj/giphy.gif",
"https://media1.tenor.com/images/36981a822c45aa7ccb89623786254f4a/tenor.gif?itemid=16197100",
"https://media.tenor.com/images/dce71925e71c94a075933bc08dfadd11/tenor.gif",
"https://media1.tenor.com/images/d337b97a447b9d6d3e4bcac6c4fcca43/tenor.gif?itemid=17598990",
"https://media1.tenor.com/images/97f6e36538c1bbf108e9bf7439b85a43/tenor.gif?itemid=17376189",
"https://media1.tenor.com/images/70419f47597f8be5685564429cca9d78/tenor.gif?itemid=17599408",
"https://media1.tenor.com/images/e70af2e888f46d421160f42e7771f3d2/tenor.gif?itemid=16084139",
"https://media1.tenor.com/images/651fe4fa567421917de9439ae39d3899/tenor.gif?itemid=16488361",
"https://media1.tenor.com/images/f5d2b97b8a90cb35aaa0ea7909be28e7/tenor.gif?itemid=16014459",
"https://media1.tenor.com/images/c93649120316b582a927e39ffca8df60/tenor.gif?itemid=17792219",
"https://media1.tenor.com/images/660894eabb6617069a5082729d89eb9f/tenor.gif?itemid=12020038",
"https://media1.tenor.com/images/347a811c3459409ea684adf442b1c4e0/tenor.gif?itemid=12508051",
"https://media1.tenor.com/images/9845373d5b71b61c96de5abcf30e7b10/tenor.gif?itemid=16416984",
"https://cdn.discordapp.com/attachments/736211506705989745/736428718515421294/8e0ca1352f5ace478841b4b7ba48c21d.gif",
"https://cdn.discordapp.com/attachments/736211506705989745/736428906915299409/cdafeafdb89aa0006ca447eb30fbfe29.gif",
"https://cdn.discordapp.com/attachments/736211506705989745/736428953690046474/b43f9c77944cebb091628e90bc630a29.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`Bailar si que esta en mi programacion ᕕ( ᐛ )ᕗ `)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> quiere que te fumes este baile nene <@${user.id}> ᕕ( ᐛ )ᕗ`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }
