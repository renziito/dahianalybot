const Discord = require("discord.js");
const moment = require("moment");
const tz= require("moment-timezone");

module.exports.run =async (bot, message, args) => {
  let inline = true
  let resence = true
  const status = {
      online: "✅ Online",
      idle: "🕘 Idle",
      dnd: "⛔ No Molestar",
      offline: "🚫 Offline/Invisible"
    }

  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  const guildMember = message.guild.members.get(member.user.id);

  if (member.user.bot === true) {
    bot = "🤖 Si";
  } else {
    bot = "🙅 No";
  }
  
  moment.locale('es');
  
  let fecha = moment(guildMember.joinedAt).tz('America/Lima').format("dddd, MMMM Do YYYY, h:mm:ss a");

    let embed = new Discord.RichEmbed()
        .setAuthor("Información de "+ member.user.username)
        .setThumbnail((member.user.displayAvatarURL))
        .setColor("#00ff00")
        .addField("Estado", `${status[member.user.presence.status]}`, inline, true)
        .addField("Nickname", `${member.nickname !== null ? `👍 ${member.nickname}` : "🙅 No tiene"}`, true)
        .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "🙅 Sin Roles"}`, true)
        .addField("Se unio a la familia: ", fecha);

    message.channel.send(embed);
}

module.exports.help = {
    name: "user"
}