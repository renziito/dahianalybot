const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   const cmd = args.join(' ').split(' | ')

  let emb = new Discord.RichEmbed()
  .setTitle(cmd[0])
  .setColor("RANDOM")
  .setDescription(cmd[1])
  .setTimestamp()

  message.channel.send(emb)
  
  message.delete();

}

module.exports.help = {
  name: "embed"
}