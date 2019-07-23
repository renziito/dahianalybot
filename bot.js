var Discord = require('discord.js');
var logger = require('winston');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

var bot = new Discord.Client();

bot.on('ready', ()=> {
    logger.info('Connected');
});

bot.login(process.env.TOKEN);

bot.on('message', (msg)=>{
  if (msg.content.substring(0, 2) == 'd!') {
    var args = msg.content.substr(msg.content.indexOf(" ") + 1);;
    var cmd = msg.content.substring(2).split(' ')[0];
    
    args= args=='d!'+cmd?"":args;
    
    switch(cmd) {
          case 'ping':
            msg.channel.send("Pong!");
            break;
            
          case 'duele':
            msg.reply("Me dueles, me hieres, me lastimas!");
            break;
               
          case 'fuerte':
            msg.channel.send("Ay que Fuerte!");
            break;
                
          case 'amo':
            msg.channel.send("Amo su inocencia 17 años");
            break;
                 
          case 'redes':
            msg.channel.send("¡Sígueme en mis RRSS! (´∀`ゞ ❤ instagram.com/dahianaly ❤ facebook.com/dahianaly ❤ twitter.com/dahianaly");
            break;
            
          case 'cumple':
            const embed = new Discord.RichEmbed()
                  .setTitle("¡Feliz Cumpleaños!!")
                  .setColor(0x00AE86)
                  .setDescription(args + "te deseamos un muy feliz cumpleaños!! Pasala genial!!.")
                  .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Fcumple.gif?v=1563915113443")
            msg.channel.send(embed);
            break;  
            
          case 'say':
            //Dango Moderador
            msg.channel.send(args);
            break;
         }

  }
});


const express = require('express');
const app = express();
 
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);