const express=require("express")

const cors=require("cors")
const app=express()
const port=4000
const server = require("http").createServer(app);
const io=require("socket.io")(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"hello"})
})

io.on("connection",(socket)=>{
    socket.emit("me",socket.id)
    socket.on("disconnect",()=>{
        socket.broadcast.emit("callEnded")
    })
    socket.on("callUser",async(userToCall,signalData,from,name)=>{
        io.to(userToCall).emit("callUser",{signal:signalData,from,name})
    })
    socket.on("answer",(data)=>{
        io.to(data.to).emit("callAccepted",data.signal)
    })
})
server.listen(port,()=>console.log("Server running on",port))
// app.listen(port,()=>console.log("Running on 4000"))