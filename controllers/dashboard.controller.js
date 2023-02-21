const momentJS = require('moment');
require('moment/locale/vi');
const POSTS_SCHEMA = require('../models/posts.model');
const MESSAGE_SCHEMA = require('../models/message.model');
const COMMENT_SCHEMA = require('../models/comment.model');

class DASHBOARD_CONTROLLER {
    show_dashboard(req,res){
        POSTS_SCHEMA.find(function(err, list_posts){
            MESSAGE_SCHEMA.find(function (err, list_message) {
                COMMENT_SCHEMA.find(function (err, list_comment){
                    if(err) console(err);
                    res.render('dashboard',{list_posts,list_message,list_comment, moment: momentJS});
                }).populate('id_posts')
            })
        }).sort({create_date: -1});
    }
}

module.exports = new DASHBOARD_CONTROLLER