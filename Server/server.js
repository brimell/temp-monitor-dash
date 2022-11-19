const { readFileSync } = require("fs");
const { createServer } = require("https");
const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");

const app = express();
// const server = require("http").Server(app);
const server = createServer(credentials, app)

const credentials = {
	key: readFileSync("/etc/letsencrypt/live/rimell.cc/privkey.pem"),
	cert: readFileSync("/etc/letsencrypt/live/rimell.cc/fullchain.pem"),
  };

app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

// start server

const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});


