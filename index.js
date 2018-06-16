const Discord = require('discord.js');
const client = new Discord.Client();
const { palavroes } = require('./lista_de_palavroes.json');
const { respostas } = require('./lista_de_respostas.json');

client.on('ready', () => {
  client.user.setActivity("Tv Aparecida", {type: 3});
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  if (palavroes.some(function(palavrao) { return msg.content.toLowerCase().indexOf(palavrao) > -1; })) {
    msg.reply(respostas[Math.floor(Math.random() * respostas.length)]);
  }
});

client.login('NDU2OTcxMTk2NjA1NjYxMjA0.DgSdww.9zTdsilQFM8MM2xw7zXSlQrB-FU');
