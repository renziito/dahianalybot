const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  var embed = new Discord.RichEmbed();
  embed.setTitle("Kawaii")
    .setColor(0x00AE86)
    .setDescription("Intentando ser Kawaii")
    .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Fkawaii.png?v=1563918163191")
  message.channel.send(embed);
}
module.exports.help = {
  name: "kawaii"
}