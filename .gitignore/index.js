const Discord = require("discord.js");

var bot = new Discord.Client("");

bot.on("ready", function() {
    bot.user.setGame("CubicWorld, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDMyODcwMjk5OTk4ODc5NzQ2.Da54BA.IAKMoXsXH0vO6crxiNwyVTvme8A");
