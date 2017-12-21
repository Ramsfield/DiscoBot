const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

var prefix = "~"

client.on('ready',() => {
	console.log('Online');
})

client.on('message', message => {

	if (message.content === prefix + 'ping') {
		message.channel.send(` \`${Date.now() - message.createdTimestamp} ms\` `);
	}

	if(!message.content.startsWith(prefix)) return;

	if(message.author.bot) return;

	console.log(message.author.username + ' said: ' + message.content);

	if (message.content === prefix + 'command' || message.content === prefix + 'commands') {
		message.channel.send({embed: {
			color: 3447003,
			description: '**Things I can attempt to explain. Type @Mike if you need further assistance**\n```\n~mention - Describes the mentioning system using @\'s\n\n~pin - Describes the channel pinning system\n\n~channels - Describes the channel system\n```'

		}})};

	if (message.content === prefix + 'channels') {
		message.channel.send({embed: {
			color: 3447003,
			description: 'One of the cool features of Discord is that you can have several different text and voice channels.\n\nTo change the channels:\n\nIf on app:\n\n```\n1. Press the 3 parallel horizontal lines at the top left of the screen\n2. Press the server picture (It\'s of us!)\n3. Press the channel you wish to join (Also how to join a voice chat!)\n```\n\nIf on computer:\n```\n1. Click the server picture (It\'s of us!)\n2. Click the channel you wish to join (It\'s also how you join a voice chat!)```'

		}})};

	if(message.content === prefix + 'mention') {
		message.channel.send({embed: {
			color: 3447003,
			description: 'Checking Mention Messages (when somebody @[Your_Name] you)\n\nIf in app:\n```\n1.Press the three horizontal bars at the top left of the screen\n2. Press the @ symbol at the bottom of the screen\n```\n\nIf on computer:\n```\nPress the @ symbol at the top right of the screen\n```\n\nMentions are used to quickly alert someone to messages about them, You can use their \'Role names\' to @ a specific family. I\'ve set these as:\n```\nGranparents: Grandma Hunerlach, Grandma and Grandpa Griffith\nParents: Mom and Dad\nParkers: Self explanatory\nNawanages: Self explanatory\nMini Griffiths: Brit and Myself\n```\nWhen you start typing @, it will give you suggestions of who you\'re trying to mention.'

		}})};

	if(message.content === prefix + 'pin') {
		message.channel.send({embed: {
			color: 3447003,
			description: 'Checking pinned messages.\nMyself or mom will be able to pin messages to the channel (They are channel specific), usually ones that contain important information. To check them:\n\nIf in app:\n```\n1. Be in the channel you wish to check the pinned messages of\n2. Press the three vertical dots on the top right of the screen\n3. Press "Pinned Messages"\n```\n\nIf on computer:\n```\n1. Be in channel you wish to check pinned messages of\n2. Press the pin icon at the top of the screen\n```'
		}})};

	if(message.content.startsWith(prefix + 'send')) {
		client.channels.get('358390495124127754').sendMessage('Hi babe!');
	}
});

client.login(token);
