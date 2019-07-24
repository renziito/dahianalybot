const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

module.exports.run = async (bot, message, args) => {
  
  const uri = "mongodb+srv://dahianalybot:sarabia@dahianalybot-lgufd.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

  
  
  message.channel.send('¡Sígueme en mis RRSS! (´∀`ゞ ❤ instagram.com/dahianaly ❤ facebook.com/dahianaly ❤ twitter.com/dahianaly')
  message.delete();
}
module.exports.help = {
  name: "rank"
}