const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const ADMIN_SCHEMA = new Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    }
})

const SEND = mongoose.model('admin',ADMIN_SCHEMA) ;
module.exports = SEND ;