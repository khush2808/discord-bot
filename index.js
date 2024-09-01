const dotenv = require('dotenv');
const {Client ,GatewayIntentBits} = require('discord.js');
dotenv.config();
const client = new Client({
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.MessageContent,
		]
	});
	client.on('messageCreate', (message) => {
		if(message.author.bot) return;
		else message.reply(`Hello ${message.author.tag}`);
		console.log(`Logged in as ${message.content}`);
	});

console.log(process.env.TOKEN)
	client.login(process.env.TOKEN);