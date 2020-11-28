const fetch = require('node-fetch')

const jsonfetchData = fetch('https://api.github.com/repos/twindle-co/twindle')
.then(res => res.json())
.then(jsonData => {
    const datajson = {
        common : {
            repoName : jsonData.name,
            creationDate : jsonData.created_at,
            loginName : jsonData.owner.login,
            ownerImage :jsonData.owner.avatar_url
        }
    }

    return datajson

    
 } )


module.exports = jsonfetchData
