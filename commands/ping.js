const { SlashCommandBuilder, EmbedBuilder, Client } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('latency'),
	async execute(interaction, Client) {
        interaction.reply(`${interaction.client.ws.ping}ms`)
    },
}
