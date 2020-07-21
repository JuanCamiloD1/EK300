const Discord = require("discord.js");
module.exports = (client, message, args) => {  
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Ayuda")
    .setDescription("Comandos disponibles:")
    .addField("Prefix:","EK")
    .addField("8ball:", "juego de pregutas")
    .addField("beer:", "dar una cerveza a alguien")
    .addField("buscaminas:","jugar buscaminas")
    .addField("pat:", "acaricias a alguien")
    .addField("hug:", "abrazar a alguien")
    .addField("punch:" ," golpear a alguien")
    .addField("sleep:", "a dormir")
    .addField("hamburger:", "dar una hamburguesa a alguien")
    message.channel.send(embed);    
    }