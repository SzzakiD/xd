/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */
const Discord = require('discord.js');

const client = new Discord.Client();

 
const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjUzNjQ0NzA4NDg0MDg3ODQ5.XfZQMw.xNgirlmz2k6nPRPcAxKRI-QO-0E);//BOT_TOKEN is the Client Secret
}
