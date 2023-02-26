const { REST } = require('@discordjs/rest')
const { chalk } = require('chalk')
const { Routes } = require('discord-api-types/v9')
require('dotenv').config()
const fs = require('fs')

module.exports = (client) => {
  const guildID = process.env.GUILD_ID
  const clientID = process.env.CLIENT_ID
  const rest = new REST({ version: '9' }).setToken(process.env.TOKEN)

  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands')
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith('.js'))

      console.log(commandFiles)

      const { commands, commandArray } = client
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`)
        commands.set(command.data.name, command)
        commandArray.push(command.data.toJSON())
        console.log(`Command: ${command.data.name} loaded!`)
      }
    }

    try {
      console.log('Started refreshing application (/) commands.')

      await rest.put(
        Routes.applicationGuildCommands(clientID, guildID), {
          body: client.commandArray
        })
      console.log('Successfully reloaded application (/) commands.')
    } catch (error) {
      console.log('Error reloading application (/) commands.')
      console.error(error)
    }
  }
}
