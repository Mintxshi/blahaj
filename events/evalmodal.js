const {  EmbedBuilder, Client } = require('discord.js');

module.exports = {
	name: 'evalmodal',
	execute(interaction) {
		client.on('interactionCreate', interaction => {
			if (interaction.type !== InteractionType.ModalSubmit) return;
		
			// Get the data entered by the user
			const favoriteColor = interaction.fields.getTextInputValue('evalinput');
			console.log({ favoriteColor });
		});
		
	},
};