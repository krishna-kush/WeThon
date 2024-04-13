const mongoose =require("mongoose")

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    fullname:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    contact:{
        type:String,
    }
})
const User=mongoose.model("User",userschema)
module.exports=User