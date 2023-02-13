const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const POSTS_SCHEMA = new Schema({
    nickname: {type: String},
    img_posts: {type: String},
    content: {type: String},
    create_date: { type: Date }
});

module.exports = mongoose.model('posts', POSTS_SCHEMA);