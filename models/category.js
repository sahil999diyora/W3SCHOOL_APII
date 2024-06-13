const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const CATEGORY_SCHEMA = new Schema({
    name : {
        type : String ,
        required : true
    },
    image : {
        type : String ,
        required : true
    },
    tagline : {
        type : String ,
        required : true
    }
})

const SEND = mongoose.model('category',CATEGORY_SCHEMA) ;
module.exports = SEND ;