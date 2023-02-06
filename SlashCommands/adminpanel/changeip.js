const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');

const request = require('request');
module.exports.run = async (inter) => {
    if(!inter.member.roles.cache.has('896048987830882326')) return inter.reply('You Dont Have Permission To Use This Command!!')
    if(inter.channel.id != '918565906974638130') return inter.reply('<#918565906974638130> !!')
    
    const license = inter.options.getString('license');
    const NewIP = inter.options.getString('newip');


    //check license
    request({
        uri: `http://pixelac.site/pixelacapi/CheckLicense.php?license=${license}`,
        method: 'POST'
    }, function(err,res,body) {
        if(body == "No License"){
            inter.reply('No License')
        } else {
            const info = JSON.parse(body);

            //Change Ip
            request({
                uri: `http://pixelac.site/pixelacapi/ChangeIP.php?license=${license}&newIP=${NewIP}`,
                method: 'POST'
            }, function(err,res,body) {})
            const ChangeIpLicense = new MessageEmbed()
            ChangeIpLicense.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
            ChangeIpLicense.setTitle(`Change Licesne IP`)
            ChangeIpLicense.setDescription(`
                **License : ${license} **

                Old IP : ${info.ip}

                New IP : ${NewIP}
            `)
            ChangeIpLicense.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
            ChangeIpLicense.setTimestamp()
            inter.reply({embeds: [ChangeIpLicense]})




            /// send log
            /*
            const RemoveLicenselog = new MessageEmbed()
            RemoveLicenselog.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
            RemoveLicenselog.setTitle(`Remove Licesne`)
            RemoveLicenselog.setDescription(`
                **License ${license} Removed** By <@!${inter.user.id}>
            `)
            RemoveLicenselog.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
            RemoveLicenselog.setTimestamp()


            const webhookClient = new WebhookClient({ id: '918146057890828358', token: 'f3OWxaGxbhe26to3YGVESjq3VqWMlDoXTG2PgoLhgk4o_YqFShSe3EfUGIUW3NYEjgEg' });
            webhookClient.send({
                username: 'License Remove',
                avatarURL: 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png',
                embeds: [RemoveLicenselog],
            })*/
        }
    })
}

module.exports.help = {
    name: 'changeip',
    permission: ['']
}