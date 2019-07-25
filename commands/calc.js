const Discord = require("discord.js");
const Math = require("math-expression-evaluator");

module.exports.run = async (bot, message, args) => {
  if (args.length === 0) {
    message.channel.send('Nada que evaluar')
    return;
  }
  
  const mathEquation = args.join(' ');
  let answer;
  try {
    answer = Math.eval(mathEquation);
  } catch (err) {
    return message.channel.send("🤖 ERROR : SYNTAX ERROR 🤖 Bop bep bop");
  }

  const embed = new Discord.MessageEmbed()
    .setDescription(`**${lang.calculator_calculation}**\n\`\`\`\n${mathEquation}\n\`\`\` **${lang.calculator_result}**\n\`\`\`\n${answer}\n\`\`\``)
    .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL())
    .setColor('#0066CC');
  message.channel.send({ embed });
  
}
module.exports.help = {
  name: "calc"
}