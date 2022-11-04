const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require('mysql2');

const app = express();
const server = require("http").Server(app);


app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

// connect to mysql db

var con = mysql.createConnection({
	host: "rimell.cc",
	user: "tempdb",
	password: "tempdb123",
	database : 'temperature_db'
  });
  
  con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });

// api

app.get("/post_temp", (req, res) => {
	return JSON.dumps(temperatures)
});


app.get("/get_temps", (req, res) => {
	console.log(req.data)
	parseFloat(req.data)
});

// start server

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});