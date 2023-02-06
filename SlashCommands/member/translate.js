const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');
const DANGER = require('../../DANGER').DANGER
module.exports.run = async (inter) => {

    const lang = inter.options.getString('language');
    const text = inter.options.getString('text');


    const translate = require("@iamtraction/google-translate")
    
    translate(text, { to: lang}).then(res => {
        const embed = new MessageEmbed()
        .setColor('#2f3136')
        .setTitle('Translate')
        .setAuthor('PixelAC', 'https://cdn.discordapp.com/attachments/892109712693284905/894977291791269968/pixelanticheatlogo.png', '')
        .setDescription(`**Text :** \n${text} \n\n**Translate To \`${lang}\`:** \n\`${res.text}\``)
        inter.reply({embeds: [embed]})
        
    })
}

module.exports.help = {
    name: 'translate',
    permission: ['']
}