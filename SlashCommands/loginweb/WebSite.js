const { MessageEmbed, MessageAttachment, WebhookClient } = require('discord.js');
const request = require('request');

const { Modal, TextInputComponent, showModal } = require('discord-modals')
const { DANGER } = require('../../DANGER')

module.exports.run = async (inter) => {
    const Emailinput  = new TextInputComponent() 
    Emailinput.setCustomId('EmailinputID')
    Emailinput.setLabel('Enter your Email !')
    Emailinput.setStyle('SHORT')
    Emailinput.setMinLength(5)
    Emailinput.setMaxLength(40)
    Emailinput.setPlaceholder('Write a Email')
    Emailinput.setRequired(true)
    
    const Passwordinput  = new TextInputComponent() 
    Passwordinput.setCustomId('PasswordinputID')
    Passwordinput.setLabel('Enter your Password !')
    Passwordinput.setStyle('SHORT')
    Passwordinput.setMinLength(5)
    Passwordinput.setMaxLength(40)
    Passwordinput.setPlaceholder('Write a Password')
    Passwordinput.setRequired(true)


    const modal = new Modal() // We create a Modal
    modal.setCustomId('LoginID')
    modal.setTitle('Connect to the account within the site !')
    modal.addComponents([Emailinput, Passwordinput])

    showModal(modal, {
        client: DANGER, 
        interaction: inter 
    })
}

module.exports.help = {
    name: 'Login WebSite',
    permission: []
}