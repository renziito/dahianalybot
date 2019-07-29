const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let emb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/pUeXcg80cO8I8/source.gif")

  message.channel.send(emb)
}
module.exports.help = {
  name: "searmo"
}