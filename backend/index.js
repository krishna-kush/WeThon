const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const server = require("http").createServer(app);
const initSocket = require("./routes/socketSetup.js");
const UserRoute=require("./routes/User.js")
const connectDb=require("./database/db.js")

app.use(cors());
app.use(express.json());



connectDb()
app.use("/api/v1/",UserRoute)

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

console.log("app is running")
initSocket(server);

server.listen(port, () => console.log("Server running on", port));