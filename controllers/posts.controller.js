var express = require('express');
require('moment/locale/vi');
const momentJS = require('moment');
const POSTS_SCHEMA = require('../models/posts.model');
const COMMENT_SCHEMA = require('../models/comment.model');
const MESSAGE_SCHEMA = require('../models/message.model');

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
        console.log(new_comment.id_posts._id);
        new_comment.save();
        res.redirect(`/dashboard/bai-dang=${new_comment.id_posts._id}`);
        // POSTS_SCHEMA.findById(req.params._id, function(err,detail_posts){
        //     MESSAGE_SCHEMA.find(function (err, list_message) {
        //         COMMENT_SCHEMA.find(function (err, list_comment){
        //             if(err) console(err);
        //             res.render('pages/post_detail',{detail_posts,list_message,list_comment, moment: momentJS});
        //         }).populate('id_posts').sort({create_date: -1});
        //     })
        // })
    }
}

module.exports = new POSTS_CONTROLLER