const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const SUB_CATEGORY_SCHEMA = new Schema({
    name : {
        type : String ,
        required : true
    },
    category :{
        type : Schema.Types.ObjectId ,
        ref : 'category',
        required : true
    }
})

const SEND = mongoose.model('subcategory',SUB_CATEGORY_SCHEMA) ;
module.exports = SEND ;