const Discord = require("discord.js");

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
    let target = message.mentions.users.first() || message.author

    if (member.user.bot === true) {
      bot = "🤖 Si";
    } else {
      bot = "<:user:424958082691629057> No";
    }

    let embed = new Discord.RichEmbed()
        .setAuthor(member.user.username)
        .setThumbnail((target.displayAvatarURL))
        .setColor("#00ff00")
        .addField("Username", `${member.user.tag}`, inline)
        .addField("Nickname", `${member.nickname !== null ? `👍 ${member.nickname}` : "🙅 No tiene"}`, true)
        .addField("Estado", `${status[member.user.presence.status]}`, inline, true)
        .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "🙅 Sin Roles"}`, true)
        .addField("Se unio a Joined ", member.user.createdAt)
        .setFooter(`Información de ${member.user.username}`)
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "user"
}