const Discord = require("discord.js")
const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');
const request = require('request');
const { id_role_customer, id_channel_customer_use, per } = require('../../config.json')
module.exports.run = async (DANGER, message, args, perfix) => {
    try{
        if(!message.member.roles.cache.has(id_role_customer)) return message.reply('You Not Customer').then(msg => {setTimeout(() => {
            message.delete()
            msg.delete()
        }, 3000);})
    } catch(err){

    }
    
    if (message.channel.id == id_channel_customer_use) {
        message.reply('Your license info has been sent to your direct, if you have problems receiving direct contact us with support').then(msg => {setTimeout(() => {
            message.delete()
            msg.delete()
        }, 7000);})
    }
    

    //log use panel
    const webhookClient = new WebhookClient({ id: '916259162722304030', token: 'uGb-7BTjXUI2KN92ZuKba-rofMADyqFJv6f_og2f-1dfWbgw2W4R_EqIcSQWD0Dg7fad' });
    webhookClient.send({
        username: 'Panel Log',
        avatarURL: 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png',
        content: `<@!${message.author.id}>, Used A Bot Panel`
    })


    //check license
    request({
        uri: `http://pixelac.site/pixelacapi/User_Panel/User_Panel_Check.php?discord_id=${message.author.id}`,
        method: 'POST'
    }, function(err,res,body) {
        if(body == "No License"){
            message.author.send('You do not have a license')
        } else if (body == "License Expire"){
            message.author.send('Your license has expired')
        } else {
            const info = JSON.parse(body);

            if(info.licensestatus == "false"){
                const panelchekembed = new MessageEmbed()
                .setTitle("PanelCheck")
                .setDescription(`
                **Your license details are as follows :**

                License Key : \`\`${info.license}\`\`

                Expire : \`\`${info.expire}\`\`

                Status : \`\`DeActive\`\`


                For Use Panel : \`\`${per}panel\`\`
                `)
                .setTimestamp()

                message.author.send({embeds: [panelchekembed]})
            } else {
                const panelchekembed = new MessageEmbed()
                .setTitle("PanelCheck")
                .setDescription(`
                **Your license details are as follows :**

                License Key : \`\`${info.license}\`\`

                Expire : \`\`${info.expire}\`\`

                Status : \`\`Active\`\`


                For Use Panel : \`\`${per}panel\`\`
                `)
                .setTimestamp()

                message.author.send({embeds: [panelchekembed]})
            }
        }
    });
}

module.exports.help = {
    name: "license",
    aliases: []
}