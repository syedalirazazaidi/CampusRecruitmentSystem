    //   STUDENT SCHEMA
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
    } ,
    user : {
        type : "string",
        required : true
    }  
    
});
    //    COMPANY SCHEMA
var CompanySchema = new Schema({
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
    } ,
    user : {
        type : "string",
        required : true
    }  
    
});
///COMPANY DATA
var CompanyJobSchema = new Schema({
    comp_name : {
        type : "string",
        required : true
    },
    comp_name1: {
        type : "string",
        required : true
    },
    comp_name2 : {
        type : "string",
         required : true
    } 
});
//////////////STUDENT PROFILE DETAILS //////////
var StudentJobProfile = new Schema({
    student_name : {
        type : "string",
        required : true
    },
    qualification: {
        type : "string",
        required : true
    },
    student_cgpa : {
        type : "string",
         required : true
    } 
});
const User =  mongoose.model('users', UserSchema);
const Company = mongoose.model('company', CompanySchema);
const jobDetails = mongoose.model('jobDetails', CompanyJobSchema);
const studentJobProfile = mongoose.model('StudentJobProfile', StudentJobProfile);
module.exports = {User, Company ,jobDetails,studentJobProfile};
