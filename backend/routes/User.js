const Router =require("express")
const User = require("../models/user")

const router=Router()

router.post("/signin",async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email:email})
        if(!user){
            return res.status(401).json({message:"User doesn't exists.",success:false})
        }
        if(password!==user.password){
            return res.status(401).json({messae:"Invalid Email or Password.",success:false})
        }
        if(user.isAdmin){
            res.status(200).json({isAdmin:true,id:user._id,message:"Logged in.",success:true})
        }
        res.status(200).json({id:user._id,message:"User logged in.",success:true})
    } catch (error) {
        console.log("Error occured.",error.message)
    }
})

router.post("/signup",async(req,res)=>{
    try {
        const {email,name,isAdmin,fullname,contact,password}=req.body
        const user=await User.create({
            email,
            isAdmin,
            fullname,
            contact,
            password
        })
        user.save()
        console.log("user",user)
        res.status(200).json({success:true,message:"User created"})
    } catch (error) {
        console.log("Error occured.",error.message)
        res.status(500).json({success:false,message:error.message})
    }
})

module.exports=router