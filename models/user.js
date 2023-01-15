const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    imePrezime:{
        type:String,
        required:true
    },
    brojTelefona:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


module.exports =mongoose.model('User',UserSchema)