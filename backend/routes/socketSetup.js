const io = require("socket.io");

let adminSocketId = null; // Initialize adminSocketId to null

module.exports = (server) => {
  const socketServer = io(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  socketServer.on("connection", (socket)=>{
      socket.emit("me", socket.id);
    
      socket.on("admin-connected",()=> handleAdminConnected(socket));
      socket.on("disconnect",()=> handleDisconnect(socket));
      socket.on("start-stream",(data)=> handleStartStream(socket,data));
      socket.on("stream-answer",(data)=> handleStreamAnswer(socket,data));

  });


  function handleAdminConnected(socket) {
    if (adminSocketId) {
      console.log("Another admin is already connected.");
      return;
    }
    adminSocketId = socket.id;
    console.log(`Admin connected with socket ID: ${adminSocketId}`);
  }

  function handleDisconnect(socket) {
    if (socket.id === adminSocketId) {
      adminSocketId = null;
      socket.broadcast.emit("admin-disconnected");
    }
    socket.broadcast.emit("user-disconnected", socket.id);
  }

  function handleStartStream(socket,data) {
    if (socket.id !== adminSocketId) {
      console.log("Only the admin can start streaming.");
      return;
    }
    if (!data || !data.signal) {
      console.log("Invalid signaling data received.");
      return;
    }
    socket.broadcast.emit("admin-stream", { signal: data.signal, adminSocketId });
  }

  function handleStreamAnswer(socket,data) {
    console.log("stream answer requested", data);
    if (!adminSocketId) {
      console.log("No admin is currently streaming.");
      return;
    }
    if (!data || !data.signal) {
      console.log("Invalid signaling data received.");
      return;
    }
    socketServer.to(adminSocketId).emit("stream-answer", data.signal);
  }
};