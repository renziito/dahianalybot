const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  const user1 = message.mentions.users.first() || message.author;
  const embed = new Discord.RichEmbed()
    .setColor('#A4F2DF')
    .setThumbnail(user1.displayAvatarURL)
    .setAuthor(user1.tag, user1.displayAvatarURL);

  let allMembersArray = [];
  let rank = 0;

  const scoresOfAllMembers = await message.client.provider.getGuild(message.guild.id, 'scores');
  message.delete();
}
module.exports.help = {
  name: "rank"
}