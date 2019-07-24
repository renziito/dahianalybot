const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if(!args[1]) return message.reply("Ingresa una pregunta de mas de 2 palabras!");
  let replies = ["Si", "No", "No lo sé", "Preguntame después", "No estoy seguro", "No porfa", "Dime tu", "Sin duda", "No puedo predecir ahora"];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ");
  const ball = bot.emojis.find(emoji => emoji.name === "8ball");
  
  let ballembed = new Discord.RichEmbed()
  .setAuthor("🎱 Te responde " + message.author.username)
  .setColor("#00ff00")
  .addField("Pregunta", question)
  .addField("Respuesta", replies[result]);
  message.channel.send(ballembed);
}
module.exports.help = {
  name: "bola8"
}
