
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    /**
     * name, userId, password, email, createdAt , updatedAt
     * userType [ ADMIN | ENGINEER | CUSTOMER ] , 
     * userStatus [ Pending | Approved | Rejected ]
     */
    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unqiue : true
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER"
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },
    jobs: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Job"
    }

});

module.exports = mongoose.model("User", userSchema);