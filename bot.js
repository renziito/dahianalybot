var Discord = require('discord.js');
var logger = require('winston');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

var bot = new Discord.Client();

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: '+bot.username + ' - (' + bot.id + ')');
});

bot.login(process.env.TOKEN);

bot.on('message', function(msg){
  logger.info(msg.content.substring(0, 2));
  if (msg.content.substring(0, 2) == 'd!') {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  }
});

bot.on('load', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 2) == 'd!') {
        var args = message.substr(message.indexOf(" ") + 1);;
        var cmd = message.substring(2).split(' ')[0];
              
        logger.info(cmd);
            
        switch(cmd) {
            case 'ping':
                bot.sendMessage({to: channelID,message: 'Pong!'});
            break;
            
          case 'duele':
            bot.sendMessage({
                    to: channelID,
                    message: user + ' me dueles, me hieres, me lastimas!'
                });
            break;
               
          case 'fuerte':
            bot.sendMessage({to: channelID,message: 'Ay que Fuerte!'});
            break;
                
          case 'amo':
            bot.sendMessage({to: channelID,message: 'Amo su inocencia 17 años'});
            break;
                 
          case 'redes':
            bot.sendMessage({
                    to: channelID,
                    message: '¡Sígueme en mis RRSS! (´∀`ゞ ❤ instagram.com/dahianaly ❤ facebook.com/dahianaly ❤ twitter.com/dahianaly'
                });
            break;
            
          case 'cumple':
            bot.sendMessage({
                    to: channelID,
                    message: '¡Feliz cumpleaños '+ args +' !'
                });
            bot.sendMessage({
              to: channelID,
              message: "https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2F_3fYL8i6Q-n-155t3dn_4hOC19Na98jFfWcrc8s1mCV2b1zjavufTWsmpUZjCrMO.gif?v=1563894896587"
            });
            break;  
            
          case 'say':
            //Dango Moderador
            if(isMod){
              bot.sendMessage({to: channelID,message: args});
            }else{
              bot.sendMessage({to: channelID,message: user+" no puedes usar ese comando :P"});
            }
            
            
            break;
         }
      
      bot.deleteMessage({channelID:channelID,messageID:evt.d.id})
      
     }
});


const express = require('express');
const app = express();
 
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);