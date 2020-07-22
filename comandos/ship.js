const Discord = require("discord.js");
module.exports = (client, message, args) => { 

    let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('**Por favor mencione a dos usuarios para calcular.**');// es por si pusiste solamente el comando
        
    const random = Math.floor(Math.random() * 100);// math.random para hacerlo random
    let heard = "";
     
        if(random < 50){
            heard=':broken_heart:';
    
        }else if(random < 80){
            heard=':sparkling_heart: ';
            
        }else if(random < 101){
            heard=':heart:';
    
        }
    let Corazon = "";
                if(random < 50){
               Corazon='https://media.tenor.com/images/ecb0e573a315d2c892d8ef7f0d5d3bd1/tenor.gif';
    
              }else if(random < 80){
                Corazon='https://media.tenor.com/images/d8aaae3c33bb6214fa708c4acee005fb/tenor.gif';
    
                }else if(random < 101){
                    Corazon='https://media.tenor.com/images/552069b71d75b49630c14c323ff8b8fa/tenor.gif';
    
    
                }
    const embed = new Discord.RichEmbed()
        .setAuthor('El porcentaje de amor de '+users+' es:')//los usuarios que elejiste estan en '+users+'
        .setDescription('**'+random+' %**'+' '+heard)//aqui hace el math random
        .setImage(Corazon)
        .setColor("RED")//puedon ponerle el que ustedes quieran
    
    message.channel.send(embed);
      
    }