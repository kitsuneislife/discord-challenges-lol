const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'piltover',
    aliases: [],
    description: 'Exibe campeões de **Piltover**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Tudo Calculado')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Piltover`)
            .setColor(colors.primary)
            .setImage(images.piltover)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}