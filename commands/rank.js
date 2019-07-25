const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  const user1 = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed()
    .setColor('#A4F2DF')
    .setThumbnail(user1.avatarURL())
    .setAuthor(user1.tag, user1.avatarURL());

  let allMembersArray = [];
  let rank = 0;

  const scoresOfAllMembers = await message.client.provider.getGuild(message.guild.id, 'scores');
  message.delete();
}
module.exports.help = {
  name: "rank"
}