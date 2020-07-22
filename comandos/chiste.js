const Discord = require("discord.js");
module.exports = (client, message, args) => { //En este caso uso command handler, tu lo puedes ir adaptando como quieras
    require('node-fetch')('https://icanhazdadjoke.com/slack')
		.then(res => res.json()) //recogemos los resultados en un .json
		.then(d => message.channel.send(d.attachments[0].text)) //enviamos el primer 
    }