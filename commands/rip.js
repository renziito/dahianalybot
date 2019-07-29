const Discord = require('discord.js');
const { createCanvas, loadImage } = require("canvas");

module.exports.run = async (bot, message, args) => {
  const base = await loadImage();
  const canvas = createCanvas(base.width, base.height);
  const ctx = canvas.getContext('2d');
  let emb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/pUeXcg80cO8I8/source.gif")

  message.channel.send(emb)
}
module.exports.help = {
  name: "searmo"
}