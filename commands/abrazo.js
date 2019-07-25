const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let { body } = await superagent.get("https://firefiles.herokuapp.com/hug")
   let link = body.url 
  const embed = new Discord.RichEmbed() 
      .setDescription(message.author+" ha empezado a fumar.")
      .setColor("RANDOM")
      .setImage(link)
      .setFooter("Powered by: FireFiles")
  message.channel.send(embed) 
}
module.exports.help = {
  name: "abrazo"
}