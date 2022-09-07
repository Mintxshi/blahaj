const { SlashCommandBuilder, EmbedBuilder, Client, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('evaluate')
		.setDescription('opens a modal to evaluate code into'),
	async execute(interaction, Client) {
            // create eval scene
            const modal = new ModalBuilder()
                .setCustomId('evalmodal')
                .setTitle('evaluation input');
            // add stuff to it 
    
            const evalinput = new TextInputBuilder()
                .setCustomId('evalinput')
                .setLabel("execute code.")
                // Paragraph means multiple lines of text.
                .setStyle(TextInputStyle.Paragraph);
    
            const firstrow = new ActionRowBuilder().addComponents(evalinput);    
            // Add inputs to the modal
            modal.addComponents(firstrow);
    
            // check if user is you
            if(interaction.user != "480813065701687306") {
                console.log('uh oh')
            }else{
                await interaction.showModal(modal);
            }
    }
}
