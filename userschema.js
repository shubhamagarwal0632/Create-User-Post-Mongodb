const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongoprac`);

const userschema = mongoose.Schema({
    name:String,
    username:String,
    email:String
})

// model ke throw he crud kr sakte h
module.exports = mongoose.model("user", userschema   )