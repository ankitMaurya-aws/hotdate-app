const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;
const db = require("./Connection/connection");
app.use(express.static("public"));
app.use("images", express.static("uploads"));
const path = require("path");
const clubroutes = require("./Routes/clubRoutes");
const userroutes = require("./Routes/userRoutes");
const event = require("./Routes/event");
const model = require("./Routes/model");
const message = require("./Routes/message");
const travel = require("./Routes/travel");

app.use(express.json());
app.use(cors());
app.use("/api", userroutes, model, event, travel, clubroutes, message);
db();
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
const server = app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

let users = [];
const addNewuser = (username, socketId) => {
  !users.some((user) => user.username === username) &&
    users.push({ username, socketId });
};
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};
const getUser = (username) => {
  return users.find((user) => user.username == username);
};
io.on("connection", (socket) => {
  console.log("new user connected", socket.id);
  socket.on("newUser", (username) => {
    addNewuser(username, socket.id);
  });
  socket.on("sendNotification", (senderName, receiverName, type) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });
  socket.on("sendText", ({ senderName, receiverName, text }) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getText", {
      senderName,
      text,
    });
    socket.on("disconnect", () => {
      removeUser(socket.id);
    });
  });
});

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Handle the "follow_request" event
//   socket.on('follow_request', async (data) => {
//     const modelId = data.modelId;
//     const model = await User.findById(modelId);
//     if (!model) {
//       console.log('Model not found');
//       return;
//     }

//     // For simplicity, let's assume the model's Socket.IO socket is already saved when they connect to the server.
//     // You should have a mechanism to map modelIds to socketIds.
//     // In this example, we're using a separate map to store these connections.
//     const modelSocketId = getModelSocketId(modelId);
//     if (!modelSocketId) {
//       console.log('Model socket not found');
//       return;
//     }

//     // Emit a notification to the model
//     io.to(modelSocketId).emit('notification', { message: 'You have a new follow request.' });
//     console.log('Notification sent to model:', modelId);
//   });

//   // Handle socket disconnection
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//     // Implement logic to remove the disconnected socket from your map of modelSocketIds, if needed.
//     // ...
//   });
// });
