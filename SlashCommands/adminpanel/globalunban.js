const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');

const request = require('request');
module.exports.run = async (inter) => {
    if(!inter.member.roles.cache.has('896048987830882326')) return inter.reply('You Dont Have Permission To Use This Command!!')
    if(inter.channel.id != '918566059961884752') return inter.reply('<#918566059961884752> !!')
    
    const SteamHex = inter.options.getString('steam');
    

    //check Ban
    request({
        uri: `http://pixelac.site/pixelacapi/Global/Check.php?steamhex=${SteamHex}`,
        method: 'POST'
    }, function(err,res,body) {
        if(body == "No steam"){
            inter.reply('This is steam hex Not ban')
        } else {
            //remove ban
            request({
                uri: `http://pixelac.site/pixelacapi/Global/RemoveGlobalBan.php?steamhex=${SteamHex}`,
                method: 'POST'
            }, function(err,res,body) {
                const GlobalBanRemove = new MessageEmbed()
                GlobalBanRemove.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
                GlobalBanRemove.setTitle(`Global UnBan`)
                GlobalBanRemove.setDescription(`
                    SteamHex : ${SteamHex}
                `)
                GlobalBanRemove.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
                GlobalBanRemove.setTimestamp()
                inter.reply({embeds: [GlobalBanRemove]})
            })
        }
    })
}

module.exports.help = {
    name: 'globalunban',
    permission: ['']
}