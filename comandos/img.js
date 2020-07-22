var cheerio = require("cheerio"); 
const Discord = require("discord.js");
var request = require("request");

module.exports = (client, message,   args, ) => { 

var parts = message.content.split(" "); 
var search = parts.slice(1).join(" "); 
if(!search) return message.channel.send("Por favor agregar algo para que pueda buscar."); 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
  
    request(options, function(error, response, responseBody) {
        if (error) {
            // Error
            return;
        }
 
        $ = cheerio.load(responseBody); 
        var links = $(".image a.link"); 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            return;
        }

const embed = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setAuthor("" , message.author.displayAvatarURL)
.setTitle("🔎 | ¡Resultado de la busqueda!")
.setImage(urls[0]) 
.setFooter(message.author.username, message.author.displayAvatarURL)
.setTimestamp() 
.setColor("RANDOM")
message.channel.send(embed);
    });
}