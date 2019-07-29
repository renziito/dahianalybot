const Discord = require('discord.js');
const { createCanvas, loadImage } = require("canvas");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let msg = await message.channel.send("Generando imagen...");
  const mentionedUser = message.mentions.users.first() || message.author;
  const avatarURL = mentionedUser.displayAvatarURL;
  
  try{
    const base = await loadImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Frip.png?v=1564422037717");
   
    const canvas = createCanvas(base.width, base.height);
    const ctx = canvas.getContext('2d');

    //const avatar = await loadImage(avatarURL);

    ctx.drawImage(base, 0, 0);
		//ctx.drawImage(avatar, 194, 399, 500, 500);
    
    console.log(canvas.toDataURL());
    
    const attachment = new Discord.MessageAttachment(canvas.toDataURL());
		return message.channel.send(attachment);
  }catch(err) {
    return  message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
}
module.exports.help = {
  name: "rip"
}