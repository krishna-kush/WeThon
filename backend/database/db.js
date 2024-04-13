const mongoose=require("mongoose");

async function connectDb(){
    try {
        const db=await mongoose.connect("mongodb+srv://admin:8iCWU1da3aUJTPoq@cluster0.ckvbael.mongodb.net/WeThon")
        console.log("Database connected")
    } catch (error) {
        console.log("Error occured",error.message)
        process.exit(1)
    }
}

module.exports=connectDb