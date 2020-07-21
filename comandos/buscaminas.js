const Discord = require("discord.js"); 
module.exports = (client, message, args) => { 
    const embed = new Discord.RichEmbed()
    .setColor("fc03db")
    .setDescription(`Buscaminas`)
    .setDescription("||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:two:||||:two:||||:zero:||||:two:||||:boom:||||:boom:||||:zero:||||:two:||||:boom:||||:three:||")
    .setFooter("mucha suerte")
    message.channel.send(embed);    
}
