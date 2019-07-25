const Discord = require("discord.js")
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports.run = (bot, message, args) => {
  if (args.length === 0) {
    message.channel.send('No Seacrh terms!')
    return;
  }
  
  let term = "";
  if (args.length === 1) {
    term = args.toString()
  } else {
    term = args.join(" ");
  }
  
  giphy.random(term).then(function (res) {
    console.log(res);
    let id = res.data[0].id
    let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
    const embed = {
      "title":"Tenga su gif "+ message.author.username,
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
          "value": "[Giphy](" + res.data[0].url + ")",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });

  });
}
module.exports.help = {
    name: "gif"
  }