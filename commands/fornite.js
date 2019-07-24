const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ft = new Fortnite(process.env.FORNITE);

module.exports.run = async (bot, message, args) => {
  let username = args.join(` `)
  if(!username) return message.channel.send("Uso: `d!fortnite <username>`")
  let data = ft.user(username).then(data=>{
    let stats = data.stats.lifetime;
    let kills = stats.kills;
    let wins = stats.wins;
    let top5s = stats.top_5;
    let kd = stats.kd;
    let mPlayed = stats.matches;
    let score = stats.score;
    let embed = new Discord.RichEmbed()
    .setTitle("Stats de Fortnite")
    .setAuthor(data.username)
    .setColor("#00ff00")
    .addField("Kills", kills, true)
    .addField("Wins", wins, true)
    .addField("KD", kd, true)
    .addField("Partidas Jugadas", mPlayed, true)
    .setFooter(`El score de ${data.username} es : ${score}`)
    .setTimestamp();
    message.channel.send(embed);
  }).catch(e => {
    console.log(e)
    message.channel.send("Username no encontrado");
  });
}

module.exports.help = {
  name: "fortnite",
  description: 'Muestra la info de fornite por el usuario',
  usage: 'd!fortnite [username]'
}
