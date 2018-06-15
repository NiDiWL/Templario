const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
 
client.login('NDU2OTcxMTk2NjA1NjYxMjA0.DgSdww.9zTdsilQFM8MM2xw7zXSlQrB-FU');