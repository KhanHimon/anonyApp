var express = require('express');
require('moment/locale/vi');

const POSTS_SCHEMA = require('../models/posts.model');
const COMMENT_SCHEMA = require('../models/comment.model');

class POSTS_CONTROLLER {
    new_posts(req,res,next){
        const file = req.file
        if (!file) {
            const new_posts = new POSTS_SCHEMA({
                nickname : req.body.nickname,
                content : req.body.content,
                create_date : Date.now()
            });
            new_posts.save();
            console.log(new_posts);
        } else {
            const new_posts = new POSTS_SCHEMA({
                nickname : req.body.nickname,
                content : req.body.content,
                img_posts: file.filename,
                create_date : Date.now()
            });
            new_posts.save();
            console.log(new_posts);
        }
        
        
        res.redirect(req.get('referer'));
    }

    new_comment(req,res){
        const new_comment = new COMMENT_SCHEMA({
            id_posts: req.body.id_posts,
            nickname: req.body.nickname,
            comment: req.body.comment,
            create_date: Date.now()
        });
        new_comment.save();
        res.redirect(req.get('referer'));
    }
}

module.exports = new POSTS_CONTROLLER