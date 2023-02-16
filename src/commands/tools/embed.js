const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');


module.exports = {

    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed.'),

    async execute(interaction, client) { 
        const exampleEmbed = new EmbedBuilder()
        .setColor(client.color)
        .setTitle('Menu Options')
        .setURL(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    }

}
