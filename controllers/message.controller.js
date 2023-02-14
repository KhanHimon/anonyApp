const momentJS = require('moment');
require('moment/locale/vi');
const MESSAGE_SCHEMA = require('../models/message.model');

class MESSAGE_CONTROLLER {
    new_message(req,res,next){
            const new_message = new MESSAGE_SCHEMA({
                nickname : req.body.nickname,
                message : req.body.message,
                create_date : Date.now()
            });
            new_message.save();
            console.log(new_message);
        res.redirect(req.get('referer'));
    }
}

module.exports = new MESSAGE_CONTROLLER