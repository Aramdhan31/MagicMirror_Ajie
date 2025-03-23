const Server = require('./js/server'); // Adjust path as necessary

// Use the Server module's methods to start the server
const server = Server();
server.listen(process.env.PORT || 8080);
