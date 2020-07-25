const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.tenor.com/images/fd85cc9beacdce770ec6332e175fb584/tenor.gif",
"https://media.tenor.com/images/d7027397012f907b2900068c8ed00067/tenor.gif",
"https://media.tenor.com/images/739771f9697a70d99ca893de0cbf3884/tenor.gif",
"https://media.tenor.com/images/9831e5ed590be6fd802bee61570b00a2/tenor.gif",
"https://media.discordapp.net/attachments/734901318409388053/736425619700842526/image0.gif",
"https://media1.tenor.com/images/590a99f9efcbc6c4de1518c7b8c47773/tenor.gif?itemid=16400623",
"https://media1.tenor.com/images/600dc9c83f85f351975c56ff67fc2d93/tenor.gif",
"https://media1.tenor.com/images/7288b35e152a9077ad4998d83e8f172a/tenor.gif?itemid=17434920",
"https://media.tenor.com/images/2554f337298952eaedcbc097e5a43e1c/tenor.gif",
"https://media1.tenor.com/images/617cec321e785631d9974eee9a22f124/tenor.gif?itemid=17006536",
"https://media1.tenor.com/images/2e9c4faf22811b6b0fdbb5f79d6dd821/tenor.gif?itemid=17675582",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`For you <3`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} 

  }
