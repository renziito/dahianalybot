const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;
  
    console.log(mentionedUser.username);
    console.log(mentionedUser.member);
    //let name = mentionedUser.member.nickname || mentionedUser.username;

    let embed = new Discord.RichEmbed()

    .setImage(mentionedUser.displayAvatarURL)
    .setColor("00ff00")
    .setTitle("Avatar de "+mentionedUser.username)
    .setFooter("Pedido Por " + message.author.tag)
    .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

    message.channel.send(embed)
}

module.exports.help = {
    name: "avatar"
}