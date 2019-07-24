const Discord = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

module.exports.run = async (bot, message, args) => {
  
  const uri = "mongodb+srv://dahianalybot:sarabia@dahianalybot-lgufd.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  
  client.connect(err => {
    const collection = client.db("dango").collection("ranks");
    console.log(collection);
    client.close();
  });

  message.delete();
}
module.exports.help = {
  name: "rank"
}