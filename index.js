const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    if(timeout) {
        clearInterval(timeout);
    }
    timeout = setInterval(() => client.channels.get("ID").send("MESSAGE"), 3600000);
    console.log("READY");
});
var timeout;
client.login("TOKEN");
