const Discord = require("discord.js")
const { MessageAttachment, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
module.exports.run = async (DANGER, message, args, perfix) => {
    if(!message.member.roles.cache.has('896048987830882326')) return message.reply('Dast Nazan!')


    const rowspanel = new MessageActionRow()
    const panelrows = new MessageButton()
    .setCustomId('panelrows')
    .setLabel('Panel!')
    .setStyle('SUCCESS')
    .setEmoji("<:logo:941016958533529600>")
       
    rowspanel.addComponents(
        panelrows
    );

    const embed = new MessageEmbed();
    embed.setAuthor('Pixel AntiCheat', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
    embed.setTitle('AntiCheat Panel')
    embed.setColor('#2f3136')
    embed.setDescription(`
    **To use the panel, just click the Button below**
    `)
    embed.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
    embed.setFooter('Pixel AntiCheat')
    embed.setTimestamp()
    message.channel.send({ content: '<@&892641582908604417>',embeds: [embed], components: [rowspanel] });







}

module.exports.help = {
    name: "guildpanel",
    aliases: []
}