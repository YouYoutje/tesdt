const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');
const request = require('request');
const randomstring = require("randomstring");

module.exports.run = async (inter) => {

    if(!inter.member.roles.cache.has('896048987830882326')) return inter.reply('You Dont Have Permission To Use This Command!!')
    if(inter.channel.id != '952835034425987073') return inter.reply('<#952835034425987073> !!')

    const expire = inter.options.getString('expire');
    const number = inter.options.getString('number');

    arr = [];
    for (let index = 0; index < number ; index++) {
        const redeem_key = "PixelAC-" + randomstring.generate({length: 4,charset: 'numeric'}) + "-" + randomstring.generate({length: 4,charset: 'numeric'}) + "-" + randomstring.generate({length: 4,charset: 'numeric'}) + "-" + randomstring.generate({length: 4,charset: 'numeric'})
        //console.log(redeem_key+`\t(expire : ${expire})`)

        request({
            uri: `http://localhost/pixelacapi/redeem/AddRedeem.php?redeem=${redeem_key}&&redeem_expire=${expire}&license_expire=${expire}`,
            method: 'POST'
        }, function(err,res,body) {                
            return;
        })


 
        arr.push(redeem_key);

        if(arr.length == number){
            console.log()
            const GenerateRedeem = new MessageEmbed()
            GenerateRedeem.setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
            GenerateRedeem.setTitle('Redeem Key Generated !')
            GenerateRedeem.setDescription(`
               **Redeem : \`${number}\` | License Time : \`${expire} Day\`**

                Created By <@!${inter.user.id}>

               **${arr.join('\n')}**
            `)
            GenerateRedeem.setThumbnail('https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png')
            GenerateRedeem.setTimestamp()
            inter.reply({embeds: [GenerateRedeem]})


            /// send log
            const webhookClient = new WebhookClient({ id: '952851336569954315', token: 'DisogaqQo95o2JKLb7qs4W5ZND32l4XMSt91FlVfEW_ZOLvokRc3JIOnu89BonqqTMPy' });
            webhookClient.send({
                username: 'Redeem Key Generated',
                avatarURL: 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png',
                embeds: [GenerateRedeem],
            })
        }

    }

}

module.exports.help = {
    name: 'generate',
    permission: ['']
}