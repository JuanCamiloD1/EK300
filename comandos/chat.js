const chatbot = require("espchatbotapi")
const Discord = require("discord.js");
module.exports = (client, message, args) => {
//Manda el mensaje a la API y te devuelve una respuesta
   chatbot.hablar("hola").then(respuesta => {
     console.log(respuesta)
   })
   chatbot.hablar(args).then(respuesta => {
    message.channel.send(respuesta)

    });

chatbot.total().then(total => {
    console.log(total)
})

}