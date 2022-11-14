const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const server = require("http").Server(app);

app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

// start server

const PORT = process.env.PORT || 3002; // the port env var is set already in the deployment (8080)

server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
