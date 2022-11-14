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
app.get("/tmdash", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
})

// connect to mysql db

var con = mysql.createConnection({
	host: "www.rimell.cc",
	user: "tempdb",
	password: "tempdb123",
	database: "temperature_db",
});

con.connect(function (err) {
	if (err) console.log(err);
	console.log("succesfully connected to mysql server");
});

// api

app.get("/post_temp", (req, res) => {
	console.log("received data", parseFloat(req.data));
});

app.get("/get_temps", (req, res) => {
	return JSON.dumps(temperatures);
});

// start server

const PORT = process.env.PORT || 3002; // the port env var is set already in the deployment (8080)

server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
