const Discord = require("discord.js");
	var rpts = ["SÃÂ­", "No", "Tal vez", "No sÃÂ©", "ÃÂ¡Claro!", "Si <3", "No >:("]; // Las Respuestas
    module.exports = (client, message, args) => { 
    let pregunt = args.slice(1).join(' '); //Si falta la pregunta
    if(!pregunt) return message.channel.send(':x: | Falta la pregunta.');
	
	const embed = new Discord.RichEmbed() //Creamos el embed
		.setTitle('Command | 8Ball')
		.setThumbnail(message.author.avatarURL)
		.addField('Su pregunta es:', args, true)
		.addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)], true)
	message.channel.send(embed)
}