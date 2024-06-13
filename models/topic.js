const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TOPIC_SCHEMA = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'subcategory',
        required: true
    }
})

const SEND = mongoose.model('topic', TOPIC_SCHEMA);
module.exports = SEND;