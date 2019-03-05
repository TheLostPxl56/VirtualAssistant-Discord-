const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	    //set channel connections here
	    var myChannel = client.channels.get("552307425127170058");
	    //set victory image
	    const VICTORY = new Discord.Attachment('/media/thelostpxl/Acer/Users/admin/Pictures/Moe/EntomaDance.gif');

	    //Text	
	    myChannel.send("Ah, small victories ^ - ^");
	    //Image
	    myChannel.send(VICTORY);
});

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTUyMjk1ODQ4OTUyODU2NTgy.D19d3Q.jnDcSeVUyVRHKV_2Ao6rDWIvwaY";

client.login(bot_secret_token);