const { SlashCommandBuilder, EmbedBuilder, Client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('imagine')
		.setDescription('generates img'),
	async execute(interaction) {
        console.log('thinking...')
    },
}
