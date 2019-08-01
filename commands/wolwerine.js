const Discord = require('discord.js');
const { createCanvas, loadImage } = require("canvas");


module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generando imagen...");
  const mentionedUser = message.mentions.users.first() || message.author;
  const avatarURL = mentionedUser.displayAvatarURL;
   
  try{
    const base = await loadImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2F9HerSZ.png?v=1564629470485");
    const avatar = await loadImage(avatarURL);
   
    const canvas = createCanvas(250, 376);
    const ctx = canvas.getContext('2d');

    ctx.transform(1,-0.1,0,1,0,0);
    ctx.drawImage(avatar, 50, 210, 140, 170);
    ctx.resetTransform();
    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
    
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'rip-image.png');
    msg.delete();

	  return message.channel.send('', attachment);
  }catch(err) {
    return  message.reply(`Oh no, ocurrio un error: \`${err.message}\`. Intentalo después!`);
  }

  
}
module.exports.help = {
  name: "wolverine"
}