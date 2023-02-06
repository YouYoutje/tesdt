const DANGER = require("../DANGER").DANGER
const { MessageEmbed } = require('discord.js');
const { id_channel_left } = require('../config.json')

DANGER.on('guildMemberRemove', async guildmember => {
    const channel = guildmember.guild.channels.cache.find(c => c.id == id_channel_left)
    

    const removeembed = new MessageEmbed()
	.setColor('#2f3136')
	.setTitle('Good Bye')
	//.setURL('https://discord.js.org/')
	.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
	.setDescription(`
    ${guildmember} left.
    user name : ${guildmember.user.tag}
    `)
	.setThumbnail(guildmember.user.displayAvatarURL({ format: 'jpg' , size: 1024}))
    .setTimestamp()
    channel.send({embeds: [removeembed]})
})
