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

client.login(process.env.y2w__gsuE75P-PVp_i3Zpk-EKl0iRLVl);//BOT_TOKEN is the Client Secret
}
