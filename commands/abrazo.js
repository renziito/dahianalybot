const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
   let { body } = await superagent.get("https://firefiles.herokuapp.com/hug")
   let link = body.url 
   let target = message.mentions.users.first();
   let msg = " ";
  
   if (target){
     msg = message.author.username+" le dio un abrazo a "+target.username+" OwO"
   }else{
     msg = "Ten un abrazo de mi parte, " +message.author.username+" OwO"
   }
   
   const embed = new Discord.RichEmbed() 
      .setDescription(msg)
      .setColor("RANDOM")
      .setImage(link)
      .setFooter("Powered by: FireFiles")
    message.channel.send(embed) 
}
module.exports.help = {
  name: "abrazo"
}