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
      "color": "RANDOM",
      "footer": {
        "text": "Fuente ["+body.autor+"]("+body.fuente+")"
      },
      "description":{
        "text":"Este signo corresponde a los nacidos entre : " +horoscopo.fechaSigno
      },
      "fields": [
        {
          "name": "Se busco : ",
          "value": "`" + signo + "`",
          "inline": true
        }
      ]
    };

  message.channel.send({embed}) 
}
module.exports.help = {
  name: "signo"
}