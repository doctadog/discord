module.exports = {
  data: {
    name: 'sub-yt',
    description: 'Subscribe to a YouTube channel'
  },
  async execute (interaction, client) {
    await interaction.reply({ content: 'Subscribed to YouTube channel', ephemeral: true })
  }
}
