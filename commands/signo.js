const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  
  if (args.length === 0) {
    message.channel.send('🔮 Tienes que decirme un signo 🔮')
    return;
  }
  
  let signo = args.toString();
  
  let { body } = await superagent.get("https://api.adderou.cl/tyaas")
  let day = body.titulo;
  let horoscopo = body.horoscopo[signo];
  
  if(typeof(horoscopo) === "undefined"){
    message.channel.send('🔮 Estas seguro que '+signo+'es un signo? 🔮')
    return;
  }
  
  const embed = new Discord.RichEmbed()
    .setAuthor("Horoscopo para "+signo+" del dia "+day)
    .setThumbnail("https://oraculoastral.com/wp-content/uploads/2019/04/"+signo+".jpg")
    .setDescription("Este signo corresponde a los nacidos entre : " +horoscopo.fechaSigno)
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/emojis/428556326482739230.png?v=1")
    .setFooter("Fuente ["+body.autor+"]("+body.fuente+")")

  message.channel.send(embed) 
}
module.exports.help = {
  name: "signo"
}