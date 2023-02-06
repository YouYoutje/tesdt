const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');
const request = require('request');
module.exports.run = async (inter) => {

    //if(!inter.member.roles.cache.has('896048987830882326')) return inter.reply('You Dont Have Permission To Use This Command!!')
    //if(inter.channel.id != '952835135793942548') return inter.reply('<#952835135793942548> !!')

    const redeem = inter.options.getString('redeem');

    //check redeem
    request({
        uri: `http://localhost/pixelacapi/redeem/CheckRedeem.php?redeem=${redeem}`,
        method: 'POST'
    }, function(err,res,body) {
        if(body == "Redeem Expired !"){
            inter.reply('Redeem Expired !')
        } else { 
            inter.reply(`${redeem} Removed!`)

            /// send log
            const webhookClient = new WebhookClient({ id: '952858073612034080', token: '7_2YhBrJzRqCuVBOc0fZlkhL7CHqd60LgF0KueT-e12KFjrBpWLoHU2S4XEY1jxTI5cM' });
            webhookClient.send({
                username: 'Redeem Key Removed !',
                avatarURL: 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png',
                content: `Redeem : ${redeem} || Removed By : <@!${inter.user.id}>`,
            })
        }
    })
}

module.exports.help = {
    name: 'removeredeem',
    permission: ['']
}