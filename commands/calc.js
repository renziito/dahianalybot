const Discord = require("discord.js");
const Math = require("math-expression-evaluator");

module.exports.run = async (bot, message, args) => {
  if (args.length === 0) {
    message.channel.send('🤖 ERROR : SYNTAX ERROR 🤖 : Nada que evaluar')
    return;
  }
  
  const mathEquation = args.join(' ');
  let answer;
  try {
    answer = Math.eval(mathEquation);
  } catch (err) {
    return message.channel.send("🤖 ERROR : SYNTAX ERROR 🤖 Bop bep bop");
  }

  const embed = new Discord.RichEmbed()
    .setDescription(`**Calculando :**\n\`\`\`\n${mathEquation}\n\n\`\`\` **Resultado:**\n\`\`\`\n${answer}\n\`\`\``)
    .setColor('#0066CC');
  
  message.channel.send(embed);
  
}
module.exports.help = {
  name: "calc"
}