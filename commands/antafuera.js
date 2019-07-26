const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let emb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Ffuera.jpg?v=1564153257875")

  message.channel.send(emb)
}
module.exports.help = {
  name: "antafuera"
}