const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const COMMENT_SCHEMA = new Schema({
    id_posts: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    nickname: {type: String},
    comment: {type: String},
    create_date: { type: Date }
});

module.exports = mongoose.model('comment', COMMENT_SCHEMA);