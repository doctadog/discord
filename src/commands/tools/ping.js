const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Return my ping!'),
    async execute(interaction, client) { 
        const message = await interaction.deferReply({ 
            fetchReply: true 
        });

        const newMessage = 
        `Api Latency: ${client.ws.ping}ms\n
        Message Latency: ${message.createdTimestamp - interaction.createdTimestamp}ms`
        
        console.log(`Sending newMessage : ${newMessage}`);

        await interaction.editReply({
            content : newMessage
        });

        console.log(`sent`);

    }
}

