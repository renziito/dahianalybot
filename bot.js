var Discord = require('discord.js');
var logger = require('winston');
var fs = require('fs');
var prefix = 'd!';

var bot = new Discord.Client({disableEveryone: true});


logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});

logger.level = 'debug';


bot.commands = new Discord.Collection();

bot.on('ready', function() {
  logger.info('Connected');
});

fs.readdir("./commands", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands found to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.login(process.env.TOKEN);



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});


bot.on('message', function(msg){
  if (msg.content.substring(0, 2) == 'd!') {
    var args = msg.content.substr(msg.content.indexOf(" ") + 1);;
    var cmd = msg.content.substring(2).split(' ')[0];
    var embed = new Discord.RichEmbed();
    args= args=='d!'+cmd?"":args;
    switch(cmd) {
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
        embed.setTitle("¡Feliz Cumpleaños!!")
          .setColor(0x00AE86)
          .setDescription(args + "te deseamos un muy feliz cumpleaños!! Pasala genial!!.")
          .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Fcumple.gif?v=1563915113443")
        msg.channel.send(embed);
        break;  
      case 'kawaii':
        embed.setTitle("Kawaii")
          .setColor(0x00AE86)
          .setDescription("Intentando ser Kawaii")
          .setImage("https://cdn.glitch.com/b9b41fa0-8db5-4aa1-a643-fffac74a54f3%2Fkawaii.png?v=1563918163191")
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
