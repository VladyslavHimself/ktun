const Discord = require('discord.js');
const config = require('config');

const client = new Discord.Client();

// get token from json
const token = config.get('botLogger.token');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
      }
})

client.login(token);

