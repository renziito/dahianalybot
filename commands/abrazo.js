const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
   let { body } = await superagent.get("https://firefiles.herokuapp.com/hug")
   let link = body.url 
   let target = message.mentions.users.first() || message.author
   let msg = " ";
  
   if (target){
     msg = 
   }else{
     msg = "Ten un abrazo de mi parte, " +message.author+" OwO"
   }
   
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