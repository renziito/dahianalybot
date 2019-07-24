const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ft = new Fortnite(process.env.FORNITE);

module.exports.run = async (bot, message, args) => {
  let username = args.join(` `)
  if(!username) return message.channel.send("Uso: `d!fortnite <username>`")
  let platform = args[1];
  let data = ft.user(username,platform).then(data=>{
    let stats = data.stats.lifetime;
    let kills = stats.find(s => s.stat == "kills");
    let wins = stats.find(s => s.stat == "wins");
    let top5s = stats.find(s => s.stat == "top5s");
    let kd = stats.find(s => s.stat == "kd");
    let mPlayed = stats.find(s => s.stat == "matchesPlayed");
    let top3 = stats.find(s => s.stat == "top3");
    let score = stats.find(s => s.stat == "score");
    let tPlayed = stats.find(s => s.stat == "timePlayed");
    let asTime = stats.find(s => s.stat == "avgSurvivalTime");
    let embed = new Discord.RichEmbed()
    .setTitle("Stats de Fortnite")
    .setAuthor(data.username)
    .setColor("#00ff00")
    .addField("Kills", kills.value, true)
    .addField("Wins", wins.value, true)
    .addField("KD", kd.value, true)
    .addField("Top 3", top3.value, true)
    .addField("Partidas Jugadas", mPlayed.value, true)
    .addField("Tiempo de Juego", tPlayed.value, true)
    .setFooter(`El score de ${data.username} es : ${score.value}`)
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
