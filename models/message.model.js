const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MESSAGE_SCHEMA = new Schema({
    nickname: {type: String},
    message: {type: String},
    create_date: { type: Date }
});

module.exports = mongoose.model('message', MESSAGE_SCHEMA);