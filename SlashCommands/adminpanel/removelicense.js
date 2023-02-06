const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');

const request = require('request');
module.exports.run = async (inter) => {
    if(!inter.member.roles.cache.has('896048987830882326')) return inter.reply('You Dont Have Permission To Use This Command!!')
    if(inter.channel.id != '918565800468693003') return inter.reply('<#918565800468693003> !!')
    
    const license = inter.options.getString('license');
    //check license
    request({
        uri: `http://pixelac.site/pixelacapi/CheckLicense.php?license=${license}`,
        method: 'POST'
    }, function(err,res,body) {
        if(body == "No License"){
            inter.reply('No License')
        } else {
            //Remove Licese
            request({
                uri: `http://pixelac.site/pixelacapi/RemoveLicense.php?license=${license}`,
                method: 'POST'
            }, function(err,res,body) {})
            const RemoveLicense = new MessageEmbed()
            RemoveLicense.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
            RemoveLicense.setTitle(`Remove Licesne`)
            RemoveLicense.setDescription(`
                **License ${license} Removed**
            `)
            RemoveLicense.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
            RemoveLicense.setTimestamp()
            inter.reply({embeds: [RemoveLicense]})




            /// send log

            const RemoveLicenselog = new MessageEmbed()
            RemoveLicenselog.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
            RemoveLicenselog.setTitle(`Remove Licesne`)
            RemoveLicenselog.setDescription(`
                **License ${license} Removed** By <@!${inter.user.id}>
            `)
            RemoveLicenselog.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
            RemoveLicenselog.setTimestamp()


            const webhookClient = new WebhookClient({ id: '944620251071512626', token: 'o0QlJG2uoVVEODVEvuizYlFlJfaxL5Q35R7N_2XdawuEmJIiSC38tlGpPB3ApTcfbe7D' });
            webhookClient.send({
                username: 'License Remove',
                avatarURL: 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png',
                embeds: [RemoveLicenselog],
            })
        }
    })
}

module.exports.help = {
    name: 'removelicense',
    permission: ['']
}