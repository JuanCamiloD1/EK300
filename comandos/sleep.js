const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    let pr = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
    .setColor("fc03db")
    .setDescription(`<@${message.author.id}> se durmió`)
    .setImage("https://media.tenor.com/images/df51877535a3e38c9cccd2f23ff154a2/tenor.gif")
    message.channel.send(embed);    
  }