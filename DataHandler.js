async function createCmd(DANGER, guildID) {
    const data = [
        {
            name: 'test',
            description: 'test bot tesst',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'the asdad asd asd  assf 0',
                required: true,
            }],
        },

        {
            name: 'ping',
            description: "sadadasda"
        },



        //addlicense
        {
            name: 'addlicense',
            description: 'Add License For AC',
            options: [
                /*
                {
                    name: 'license',
                    type: 'STRING',
                    description: 'License Key',
                    required: true,
                },*/
                {
                    name: 'discord',
                    type: 'USER',
                    description: 'License Discord Id',
                    required: true,
                },
                {
                    name: 'expire',
                    type: 'STRING',
                    description: 'License Expire',
                    required: true,
                },
            ],
        },

        //check license
        {
            name: 'checklicense',
            description: 'Check License For AC',
            options: [
                {
                    name: 'license',
                    type: 'STRING',
                    description: 'License Key',
                    required: true,
                }
            ],
        },

        //remove license
        {
            name: 'removelicense',
            description: 'Remove License For AC',
            options: [
                {
                    name: 'license',
                    type: 'STRING',
                    description: 'License Key',
                    required: true,
                }
            ],
        },

        //changeip license
        {
            name: 'changeip',
            description: 'ChangeIP License For AC',
            options: [
                {
                    name: 'license',
                    type: 'STRING',
                    description: 'License Key',
                    required: true,
                },
                {
                    name: 'newip',
                    type: 'STRING',
                    description: 'License New IP',
                    required: true,
                },
            ],
        },

        //global ban
        {
            name: 'globalban',
            description: 'Global Ban AC',
            options: [
                {
                    name: 'steam',
                    type: 'STRING',
                    description: 'Steam Hex',
                    required: true,
                },
                {
                    name: 'license',
                    type: 'STRING',
                    description: 'License RockStar',
                    required: true,
                },
                {
                    name: 'discord',
                    type: 'STRING',
                    description: 'Discord ID',
                    required: true,
                },
                {
                    name: 'token',
                    type: 'STRING',
                    description: 'token',
                    required: false,
                },
            ],
        },

        //global unban
        {
            name: 'globalunban',
            description: 'Global UnBan AC',
            options: [
                {
                    name: 'steam',
                    type: 'STRING',
                    description: 'Steam Hex',
                    required: true,
                },
            ],
        },


        //members translate
        {
            name: 'translate',
            description: 'Translate',
            options: [
                {
                    name: 'language',
                    type: 'STRING',
                    description: 'Language',
                    required: true,
                },
                {
                    name: 'text',
                    type: 'STRING',
                    description: 'Text',
                    required: true,
                },
            ],
        },

        
        //redeem
        /*{
            name: 'redeem',
            description: 'redeem License For AC',
            options: [
                {
                    name: 'redeem',
                    type: 'STRING',
                    description: 'redeem Key',
                    required: true,
                },
            ],
        },*/
        // update version 2
        {
            name: 'redeem',
            description: 'Redeem License For AC',
        },

        //addredeem
        {
            name: 'generate',
            description: 'redeem generate',
            options: [
                {
                    name: 'expire',
                    type: 'STRING',
                    description: 'Redeem License Expire',
                    required: true,
                },
                {
                    name: 'number',
                    type: 'STRING',
                    description: 'Redeem Number',
                    required: true,
                },
            ],
        },

        //removeredeem
        {
            name: 'removeredeem',
            description: 'redeem generate',
            options: [
                {
                    name: 'redeem',
                    type: 'STRING',
                    description: 'Redeem Key',
                    required: true,
                },
            ],
        },

        //Login WebSite
        {
            name: 'Login WebSite',
            type: 3
        },
    ]

    await DANGER.guilds.cache.get(guildID)?.commands.set(data);
}

module.exports = {createCmd}

//914924333867098162