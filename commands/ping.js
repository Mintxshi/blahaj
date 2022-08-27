const { SlashCommandBuilder, EmbedBuilder, Client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('imagine')
		.setDescription('dall e mini in discord'),
	async execute(interaction) {
        console.log('thinking...')
		
    },
}
