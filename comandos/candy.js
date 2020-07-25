const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://cdn.discordapp.com/attachments/736212621367312465/736440013205798942/CH91T5pVAAARtXA.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440054993649744/1ff63e71ff43134d066965f2425a0fff.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440096298893393/7362a67e257728e16e374fc4907afb84.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440189613768796/235f4c32714d4fca225f79b8a983334c.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440270329085953/mini-gummy-sharks_1_grande.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440325672796170/dark-blue-mms_2.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440470225551414/SIXLETS_ROYAL_BLUE_530x.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440548117839872/original.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440577989541888/a2cdafb5c0eae0641a363ff332759288.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440786383798363/blue-raspberries.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736440879362998322/b4eb70e0c2adec64927dca6de2d90dce.png",
"https://cdn.discordapp.com/attachments/736212621367312465/736441158472957992/original.png",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`Tengo dulces de thirium para ti.... Solo puedo comer de estos <@${message.author.id}> ᐠ( ᐛ )ᐟ`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> Creo que alguien te ha enviado dulces de thirium altamente aesthetic <@${user.id}> :flushed:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }
