const Discord = require('discord.js');
const { createCanvas, loadImage } = require("canvas");
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating avatar...");
  const mentionedUser = message.mentions.users.first() || message.author;
  const avatarURL = mentionedUser.displayAvatarURL;
  
  try{
    const canvas = createCanvas(300, 300);
    const ctx = canvas.getContext('2d');

    const { rip }  = await request.get(avatarURL)
    const base = await loadImage(rip);

    const { body } = await request.get(avatarURL);
    const avatar = await loadImage(body);

    ctx.drawImage(base, 0, 0);
    ctx.drawImage(avatar, 194, 399, 500, 500);

    const emb = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(canvas.toBuffer())

    return  message.channel.send(emb)
  }catch(err) {
    return  message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
 
}
module.exports.help = {
  name: "rip"
}