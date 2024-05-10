const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server started");
});

server.listen(5050, () => {
  console.log("Server is running on http://localhost:5050");
});
