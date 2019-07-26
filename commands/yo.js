module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  
  const embed = new Discord.RichEmbed()
    .setAuthor("Dahianaly")
    .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2F2c9a3744b48a9cc21b5b779eb4bcf757.png?v=1564100313990")
    .setDescription("Me llamo Dahian, tengo 22 y soy de Perú c: Me gusta jugar, ver anime, escribir, dibujar y diseñar ♡＾▽＾♡")
    .setColor("RANDOM");

  message.channel.send(embed)
  message.delete();
}
module.exports.help = {
  name: "yo"
}