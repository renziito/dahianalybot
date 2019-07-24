const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:online:424890369688469504> Online",
        idle: "<:idle:424890472855502849> Idle",
        dnd: "<:dnd:424890429524410368> Do Not Disturb",
        offline: "<:offilne:424890400319340546> Offline/Invisible"
      }
        
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author

    if (member.user.bot === true) {
      bot = "<:bottag:425631858265423883> Yes";
    } else {
      bot = "<:user:424958082691629057> No";
    }

    let embed = new Discord.RichEmbed()
        .setAuthor(member.user.username)
        .setThumbnail((target.displayAvatarURL))
        .setColor("#00ff00")
        .addField("Username", `${member.user.tag}`, inline)
        .addField("ID", member.user.id, inline)
        .addField("Nickname", `${member.nickname !== null ? `<:yes:425632265993846795> Nickname: ${member.nickname}` : " None"}`, true)
        .addField("Bot", `${bot}`,inline, true)
        .addField("Estado", `${status[member.user.presence.status]}`, inline, true)
        .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
        .addField("Se unio a Joined ", member.user.createdAt)
        .setFooter(`Información de ${member.user.username}`)
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "user"
}