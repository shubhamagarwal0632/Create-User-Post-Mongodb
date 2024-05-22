const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://allinone1creater:Wy7lSWqJywFAL1Vt@cluster0.zcsseyo.mongodb.net/");

const userSchema = mongoose.Schema({
    imageurl:String,
    email:String,
    name:String
})

module.exports = mongoose.model('user',userSchema)