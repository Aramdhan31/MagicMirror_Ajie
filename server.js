const express = require("express");
const helmet = require("helmet");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Log = require("/logger.js");


function Server() {
  const app = express();
  const server = http.Server(app);
  const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  app.use(helmet());
  app.use(express.static(path.resolve(__dirname + "/../")));

  app.get("/startup", (req, res) => {
    res.send(process.uptime().toString());
  });

  app.get("/version", (req, res) => {
    res.json({ version: global.version });
  });

  io.on("connection", function (socket) {
    Log.log("A client connected.");

    socket.on("disconnect", function () {
      Log.log("A client disconnected.");
    });

    // Add more socket listeners here as needed
  });

  return {
    listen: function (port) {
      // Use port from environment, or default to 8080
      const actualPort = process.env.PORT || port || 8080;
      server.listen(actualPort, "0.0.0.0", () => {
        Log.log(`Server is running on port ${actualPort}`);
      });
    }
  };
}

module.exports = Server;
