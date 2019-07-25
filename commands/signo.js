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
  
  const embed = {
      "title":"Horoscopo para "+signo+' del dia '+day,
      "color": 3066993,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
        "text": "Powered by Giphy"
      },
      "image": {
        "url": msgurl
      },
      "fields": [
        {
          "name": "Se busco : ",
          "value": "`" + term + "`",
          "inline": true
        },
        {
          "name": "URL de la Pagina",
          "value": "[Giphy](" + res.data[index].url + ")",
          "inline": true
        }
      ]
    };
  
  
  const embed = new Discord.RichEmbed() 
    .setAuthor("Horoscopo para "+signo+' del dia'+day)
    .setDescription("Este signo corresponde a los nacidos entre : " +horoscopo.fechaSigno)
    //.addField("Estado", `${status[member.user.presence.status]}`, true, true)
    .setColor("RANDOM")
    .setFooter("Fuente ["+body.autor+"]("+body.fuente+")")
  message.channel.send(embed) 
}
module.exports.help = {
  name: "signo"
}