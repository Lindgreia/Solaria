const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setname('alert')
        .setDescription('Alert eveyone with a certain role');

}