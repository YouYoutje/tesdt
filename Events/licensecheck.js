const DANGER = require("../DANGER").DANGER
const request = require('request');
DANGER.on('ready', async () => {
    
    /*const guild = DANGER.guilds.cache.find(guild => guild.id == '892633231491481600')
    await guild.members.fetch()
    const role = guild.roles.cache.find(r => r.id === '892641582908604417')
    
    function CheckLicenseTime() {
        request({
            uri: `http://localhost/pixelacapi/event_checklicense/CheckLicense.php?`,
            method: 'POST'
        }, function(err,res,body) {
            if(body != 'No License Expire'){
                const info = JSON.parse(body);
                if(info.DiscordID && info.DiscordID != ''){
                    try {
                        const userid = info.DiscordID;
                        const user = guild.members.cache.find(user => user.id == userid) //the role to check
                        
                        user.roles.remove(role).catch(error => {})
                    } catch {}
                }
            }
        })
    }; setInterval(CheckLicenseTime, 3600000)//3600000*/
})