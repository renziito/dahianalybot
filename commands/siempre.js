module.exports.run = async (bot, message, args) => {
  if (args.length === 0) {
    message.channel.send('Siempre que?')
    return;
  }
  
  let msg = args.join(' ');
  
  let FUpper = msg.charAt(0).toUpperCase() + msg.slice(1)
  
  message.channel.send('#Siempre' + FUpper+ 'NuncaIn'+msg.toLowerCase())
}
module.exports.help = {
  name: "siempre"
}
