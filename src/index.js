require('dotenv').config()
const { Client, IntentsBitField, Collection, GatewayIntentBits } = require('discord.js')
const { connect } = require('mongoose')
const fs = require('fs')
const client = new Client({ intents: GatewayIntentBits.Guilds })

const functionFolder = fs.readdirSync('./src/functions')
for (const folder of functionFolder) {
  if (folder.endsWith('.js')) continue
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js')
    )
  for (const file of functionFiles) { require(`./functions/${folder}/${file}`)(client) }
};
client.commands = new Collection()
client.commandArray = []
client.color = '0x18e1ee'

client.handleEvents()
client.handleCommands()
client.login(process.env.TOKEN);

(async () => {
  await connect(process.env.DATABASE).catch(console.error)

  console.log(connect)
})()
