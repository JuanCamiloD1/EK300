const Discord = require("discord.js");
const ping = require('minecraft-server-util') // Instala el NPM antes
const request = require("request");     // Instala el NPM Antes
module.exports = (client, message, args) => { 
	 if(!args[0]) return message.channel.send('Tienes que poner la ip de un servidor') // Por si no ponen una ip
 var port = args[1] 
if(!port) {
  port = `25565` 
} // Si no ponen un puerto, el predeterminado será 25565
    
    let pingURL = `https://api.minetools.eu/ping/${args}` // Es la herramienta de donde se sacara una parte de la informacion del servidor
  
  request(pingURL, function(err, resp, body){
    if(err) return console.log(err.message);
    body = JSON.parse(body);
    if(body.error) return message.channel.send(":x: `Error | Servidor fuera de linea o no disponible.`") // Si la herramienta no encuentra nada sobre la ip
    
     let motd = `http://status.mclive.eu/MinecraftServer/${args[0]}/25565/banner.png` // Imagen del motd del servidor.
 
            ping(args[0], parseInt(port), (error, reponse) =>{ // Usando minecraft-server-until para sacar informacion mas especifica
                if(error) return message.channel.send('No puedo encontrar ese servidor'); // Por si minetools lo reconoce pero la otra api no.
                const Embed = new Discord.RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host) // ip del servidor
                .addField('Server Version', reponse.version) // version del servidor
                .addField('Latency', body.latency) // latencia del servidor con pingURL y request
                .addField('Online Players', reponse.onlinePlayers + "/" + reponse.maxPlayers) // Jugadores online y limite de jugadores
                .setImage(motd) // Motd antes definido
                .setThumbnail('https://cdn.glitch.com/402b9099-0636-457a-8ffb-faf65c857490%2F1.png?v=1585792839856') // Totalmente opcional.
                
                 
                message.channel.send(Embed) //Envia el embed con la info del servidor
                } )
  
                 
                  })
                  }