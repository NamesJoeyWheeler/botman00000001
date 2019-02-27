const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    if(timeout) {
        clearInterval(timeout);
    }
    timeout = setInterval(() => client.channels.get("469874894923104268").send("$paycheck"), 7200000);
    console.log("READY");
});
var timeout;
client.login("TOKEN");
