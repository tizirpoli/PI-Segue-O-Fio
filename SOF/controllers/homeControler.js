const fs = require('fs');
const path = require('path');

let mailingListFile = path.join("mailingInvites.json")

const inviteFriendController = {
    post: (req, res) => {
        let { emailIndicado } = req.body;
        console.log(emailIndicado);

        fs.writeFileSync(mailingListFile, JSON.stringify(emailIndicado, null, 2), 'utf-8');

        res.redirect('home');
    }

};

module.exports = inviteFriendController;