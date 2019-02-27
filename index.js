const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'General Kenobi?') {
    msg.reply('Hello there.');
  }
});
// add message as a parameter to your callback function
bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "$loop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("123")
            .catch(console.error); // add error handling here
        }, 1 * 1000); 
    }
});

client.login(process.env.BOT_TOKEN);
