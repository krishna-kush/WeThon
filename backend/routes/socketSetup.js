const io = require("socket.io");

let adminSocketId = null; // Initialize adminSocketId to null

module.exports = (server) => {
    const socketServer = io(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    socketServer.on("connection", (socket) => {
        socket.emit("me", socket.id);

        // Handle admin connection
        socket.on("admin-connected", () => {
            adminSocketId = socket.id;
            console.log(`Admin connected with socket ID: ${adminSocketId}`);
        });

        socket.on("disconnect", () => {
            if (socket.id === adminSocketId) {
                adminSocketId = null;
                socket.broadcast.emit("admin-disconnected");
            }
            socket.broadcast.emit("callEnded");
        });

        socket.on("callUser", async (signalData) => {
            if (socket.id === adminSocketId) {
                socket.broadcast.emit("admin-stream", { signal: signalData, adminSocketId });
            }
        });

        socket.on("answer", (data) => {
            if (adminSocketId) {
                socketServer.to(adminSocketId).emit("callAccepted", data.signal);
            }
        });
    });
};