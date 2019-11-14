var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name : {
        type : "string"
    },
    last_name : {
        type : "string"
    },
    email : {
        type : "string",
         required : true
    } ,
    password : {
        type : "string" ,
        required : true
    },
  user : {
      type : "string",
      required : true
  }    
    
});
module.exports = company =  mongoose.model('Company', UserSchema);