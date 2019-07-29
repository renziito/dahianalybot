const Discord = require('discord.js');
const { createCanvas, loadImage } = require("canvas");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let msg = await message.channel.send("Generando imagen...");
  const mentionedUser = message.mentions.users.first() || message.author;
  const avatarURL = mentionedUser.displayAvatarURL;
  
  try{
    const base = await loadImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Frip.png?v=1564422037717");
   
    const canvas = createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    //const avatar = await loadImage(avatarURL);
    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(avatarURL, 25, 25, 200, 200);
    
    
		//ctx.drawImage(avatar, 194, 399, 500, 500);
    
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'rip-image.png');
    
		return message.channel.send("Se Murio ",mentionedUser,attachment);
  }catch(err) {
    return  message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
}
module.exports.help = {
  name: "rip"
}