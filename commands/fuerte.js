var Discord = require('discord.js');
var embed = new Discord.RichEmbed();

module.exports.run = async (bot, message, args) => {
  embed.setTitle("Ay que fuerte!")
    .setColor(0x00AE86)
    .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Fay_q.jpg?v=1563943544275")
  message.channel.send(embed);
}
module.exports.help = {
  name: "fuerte"
}