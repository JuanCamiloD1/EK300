const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://cdn.discordapp.com/attachments/736210874380845137/736433414441271327/9b6ba8e79eb094b922661056c227807a.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736433528757157968/76e7c408a5c9e4d9e7f01fb13e81cc9e.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736433623967727666/original.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736433699708469318/sex-in-the-driveway-drink-6-735x1103.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736434004663992440/a3674aeb5e117604d66f14978c634e5c.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736434225225400390/1a7e5c9e5f070395efbeedad7d859420.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736434418842992650/26f9ccb439546235c192add6daffeae7.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736434691950903336/blue-long-island-iced-tea-735x1103.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736435049444016168/Sex-In-The-Driveway-All-Summer-Long-Recipe-1.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736435091227803742/181762.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736435206050807818/tumblr_oyocd5VmdH1uezjroo1_400.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736435283901415514/original.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736435429200625774/3faa9343841d4fa85b552a66a4e582d0.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736435484150202408/bluemargarita3.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736436392967667773/7be1bc723b2934ea233b701f2249f252.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736436692646494228/QllzD3afrK2V2uVOP1zCQj0kUMEvjUpycMTaIZVI-aUzsgXL7ucWblzufuNHeAaAY8rrxqOLt7qPoPJjMQRVpKM4v13HpNMs.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736436838176391178/Blue-Hawaiian-Party-Punch-2.png",
"https://cdn.discordapp.com/attachments/736210874380845137/736436962029731981/0919-butterfly-pea-flower-tea-2.png",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()

  .setDescription(`¡Aquí esta su bebida de thirium! Es de alta calidad ;) <@${message.author.id}> `)
  .setImage(cap)
  .setColor("#0022ff");
  message.channel.send(embed);
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`¡Aquí esta su bebida de thirium! Es de alta calidad ;) <@${user.id}>`)
.setImage(cap)
.setColor("#0022ff");
message.channel.send(embed);
}   

  }
