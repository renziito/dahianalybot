const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if(!args[1]) return message.reply("Ingresa una pregunta de mas de 2 palabras!");
  let replies = ["Si", "No", "No lo sé", "Preguntame después", "Cyka", "No estoy seguro", "No porfa", "Dime tu", "Sin duda", "No puedo predecir ahora"];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ");
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00ff00")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  message.channel.send(ballembed)
  message.delete();
}
module.exports.help = {
  name: "bola8"
}
