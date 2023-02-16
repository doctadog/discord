const { REST } = require('@discordjs/rest');
const { chalk } = require('chalk');
const { Routes } = require('discord-api-types/v9');

const fs = require('fs');

module.exports = (client) => { 
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync("./src/commands");
        for (const folder of commandFolders) {
            const commandFiles = fs
              .readdirSync(`./src/commands/${folder}`)
              .filter((file) => file.endsWith('.js'));
            
            console.log(commandFiles);

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} loaded!`);
                
            }
        }
        const clientID = "1075578041952112672"
        const guildID = "1072570469401763930"

        const token = "MTA3NTU3ODA0MTk1MjExMjY3Mg.GnqYIY.3Bw_hjAMRU8PHpWxWEwGAejBA022MXyHeOQg8M"
        //const rest = new REST({ version: '9' }).setToken(token);
        //const clientID = process.env.CLIENT_ID;
        const rest = new REST({ version : '9' }).setToken(process.env.TOKEN);


        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationGuildCommands(clientID, guildID), {
                body: client.commandArray,
            });
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.log('Error reloading application (/) commands.');
            console.error(error);
        }
    };
}