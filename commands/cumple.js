var Discord = require('discord.js');
var embed = new Discord.RichEmbed();

module.exports.run = async (bot, message, args) => {
  embed.setTitle("¡Feliz Cumpleaños!!")
    .setColor(0x00AE86)
    .setDescription(args + "te deseamos un muy feliz cumpleaños!! Pasala genial!!.")
    .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Fcumple.gif?v=1563915113443")
  message.channel.send(embed);
}

module.exports.help = {
  name: "cumple"
}
