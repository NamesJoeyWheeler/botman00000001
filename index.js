const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'General Kenobi?') {
    msg.reply('Hello there.');
  }
});

client.login(process.env.BOT_TOKEN);
