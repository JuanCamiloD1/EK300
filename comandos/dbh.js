const { meme } = require("memejs")
const Discord = require("discord.js");
module.exports = (client, message, args) => { 
//Filtro de subreddit
meme('DetroitBecomeHuman', function(err, data) { 
if (err) return message.reply(err) 
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(data.url) 
message.channel.send(embed)
})
}