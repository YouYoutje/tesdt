const DANGER = require("../DANGER").DANGER
const { Permissions } = require('discord.js');

DANGER.on('messageCreate', async message => {
    if (!message.guild) return;

    function deleteMessage() {
        message.delete();
        message.channel.send(`<@!${message.author.id}>, Please dont send link of other servers !!`)
    }

    const links = ['discord.gg/', 'discord.com/invite/', 'discordapp.com/invite/']

    for (const link of links) {
        if (!message.content.includes(link)) return;
        const code = message.content.split(link)[1].split(" ")[0];
        const isGuildInvite = message.guild.invites.cache.has(code);

        if (!message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])){
            if(!isGuildInvite) {
                deleteMessage();
            }
        }
        
    }

    /*
    const InviteLink = ['discord.gg/', 'discord.com/invite/', 'discordapp.com/invite/']
    if(InviteLink.some(link => message.content.toLocaleLowerCase().includes(link))) {
        const UserCode = message.content.split('discord.gg/' || 'discord.com/invite/' || 'discordapp.com/invite/')[1]
        message.guild.invites.fetch().then(invites => {
            let InviteArray = []
            for (let inviteCode of invites) {
                InviteArray.push(inviteCode[0])
            }
            if(!InviteArray.includes(UserCode)) {
                message.delete()
                return message.channel.send(`<@!${message.author.id}>, Please dont send link of other servers !!`)
            }
        })
    }*/
    
})