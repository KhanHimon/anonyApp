var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const momentJS = require('moment');
require('moment/locale/vi');

const POSTS_SCHEMA = require('../models/posts.model');

class POSTS_CONTROLLER {
    show_posts(req,res){
        POSTS_SCHEMA.find(function(err, list_posts){
            if(err) console(err);
            res.render('dashboard',{list_posts, moment: momentJS});
        }).sort({create_date: -1});
    }

    new_posts(req,res){
        const new_posts = new POSTS_SCHEMA({
            nickname : req.body.nickname,
            content : req.body.content,
            create_date : Date.now()
        });
        new_posts.save();
        console.log(new_posts);
        res.redirect(req.get('referer'));
    }
}

module.exports = new POSTS_CONTROLLER