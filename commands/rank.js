const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

module.exports.run = async (bot, message, args) => {
  
  var logger = require('winston');
  logger.info(message.client.rest.client)
   message.delete();
  return;
  
  const uri = "mongodb+srv://dahianalybot:sarabia@dahianalybot-lgufd.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  
  client.connect(err => {
    const collection = client.db("dango").collection("ranks");
    let target = message.author.id;
    console.log(collection.db[target]);
    client.close();
  });

  message.delete();
}
module.exports.help = {
  name: "rank"
}