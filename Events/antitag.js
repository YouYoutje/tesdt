const { MessageAttachment, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const ms = require('ms')
const DANGER = require("../DANGER").DANGER
const Owner = ['887070326951927878', '810589274561970177']
DANGER.on('messageCreate', async message => {
    if(message.author.bot) return
    if(message.channel.type == "DM") return

    if(message.channel.id == '892636672431378432') return
    if(message.member.roles.cache.has('892866384248307842') || message.member.roles.cache.has('892638651610185739') || message.member.roles.cache.has('952997466146492436') || message.member.roles.cache.has('896048987830882326') || message.member.roles.cache.has('919337539523989545') || message.member.roles.cache.has('938444011876782142') || message.member.roles.cache.has('892639470703226891') || message.member.roles.cache.has('892639936581369867') || message.member.roles.cache.has('892638799862071336')) return


    if(message.mentions.users.first()) {
        let tag = message.guild.members.cache.get(message.mentions.users.first().id)
        if(Owner.indexOf(message.mentions.users.first().id) >= 0 || tag.roles.cache.has('892639470703226891')|| tag.roles.cache.has('892639936581369867')|| tag.roles.cache.has('892638799862071336')){

            
            const embed = new MessageEmbed();
            embed.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            embed.setTitle('Warn')
            embed.setDescription(`
            <:logo:941016958533529600>Your message has been deleted<:logo:941016958533529600>

            Dear <@!${message.author.id}>, it is not allowed to tag staff members, this is against the rules!

            > This message will be deleted automatically
            `)
            message.reply({content: `<@!${message.author.id}>`, embeds: [embed]}).then(msg => {
                setTimeout(() => { message.delete().catch(error => {})}, 2000)
                setTimeout(() => { msg.delete().catch(error => {})}, 9000)
            })

            let member = message.guild.members.cache.get(message.author.id)
            let time = ms('1m')
            member.timeout(time, 'Dont Tag')
            
        }
    }

})