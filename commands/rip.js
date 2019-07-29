const Discord = require('discord.js');
const { createCanvas, loadImage } = require("canvas");


module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generando imagen...");
  const mentionedUser = message.mentions.users.first() || message.author;
  const avatarURL = mentionedUser.displayAvatarURL;
  let argsWithoutMentions = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
  let mensaje = "1993 - 2019";

 if (argsWithoutMentions.length > 1) {
    mensaje =  argsWithoutMentions.join(" ");
  }
   
  try{
    const base = await loadImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Frip.png?v=1564422037717");
    const avatar = await loadImage(avatarURL);
   
    const canvas = createCanvas(250, 376);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
	  ctx.drawImage(avatar, 80, 90, 100, 100);
    
    const data = ctx.getImageData(80, 90, 100, 100);
		for (let i = 0; i < data.data.length; i += 4) {
			const brightness = (0.34 * data.data[i]) + (0.5 * data.data[i + 1]) + (0.16 * data.data[i + 2]);
			data.data[i] = brightness;
			data.data[i + 1] = brightness;
			data.data[i + 2] = brightness;
		}
		ctx.putImageData(data, 80, 90);
    
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center"; 
    ctx.fillText(mentionedUser.username, canvas.width/2, 40);
       
    fillTextMultiLine(ctx,mensaje,canvas.width/2, 220);
    
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'rip-image.png');
    msg.delete();

	  return message.channel.send('', attachment);
  }catch(err) {
    return  message.reply(`Oh no, ocurrio un error: \`${err.message}\`. Intentalo después!`);
  }
  
  
  function fillTextMultiLine(ctx, text, x, y) {
      var lineHeight = ctx.measureText("M").width * 1.2;
      var lines = text.split("\n");
      console.log(lines);
      for (var i = 0; i < lines.length; ++i) {
        ctx.fillText(lines[i], x, y);
        y += lineHeight;
      }
    }
  
}
module.exports.help = {
  name: "rip"
}