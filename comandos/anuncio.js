const Discord = require("discord.js");
module.exports = (client, message, args) => { //exportamos para discord.js
    
    let anuncio = args.slice(0).join(" ") //definimos anuncio
    var perms = message.member.hasPermission("MANAGE_GUILD"); //definimos los permisos necesarios
    let autor = `${message.author}` //definimos el autor
    
  
    if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); //si no tienen permisos
    if(!anuncio) return message.channel.send(`${message.author}`+' **debes de escribir un anuncio!**') //si no han escrito el anuncio
    const embed = new Discord.RichEmbed() //Creamos el embed, customizable a su gusto
      .setTitle('Anuncios')
      .setDescription(anuncio)
      .addField('Anuncio por:', `${message.author}`)
      .setColor('#00ff11')
    client.channels.resolve('735233291333927022').send(embed);// colocamos la id del canal del anuncio
    message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**').then(async(msg) => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
    })
  }