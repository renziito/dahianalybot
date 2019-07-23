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
    
    var args = msg.content.substr(msg.content.indexOf(" ") + 1);;
    var cmd = msg.content.substring(2).split(' ')[0];
    
    if(args!='d!'+cmd){args = args}else{args = ""};
    
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
            msg.channel.send("¡Feliz cumpleaños "+ args +" !");
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