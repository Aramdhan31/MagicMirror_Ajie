const express = require("express");
const helmet = require("helmet");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Log = require("./logger.js"); // Make sure this file exists
const Utils = require("./utils.js"); // Optional, depending on what you use

function Server() {
  const app = express();
  const server = http.Server(app);
  const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Use security best practices
  app.use(helmet());

  // Serve static files (your MagicMirror UI)
  app.use(express.static(path.resolve(__dirname, "..")));

  // Endpoint to check server uptime
  app.get("/startup", (req, res) => {
    res.send(process.uptime().toString());
  });

  // Version check
  app.get("/version", (req, res) => {
    res.json({ version: global.version || "unknown" });
  });

  // WebSocket connection handler
  io.on("connection", function (socket) {
    Log.log("A client connected.");

    socket.on("disconnect", function () {
      Log.log("A client disconnected.");
    });

    // You can add custom socket handlers here
  });

  return {
    listen: function (port) {
      server.listen(port, () => {
        Log.log(`Server is running on port ${port}`);
      });
    }
  };
}

module.exports = Server;
