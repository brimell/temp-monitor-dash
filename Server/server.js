const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const path = require("path");

const { instrument } = require("@socket.io/admin-ui");

const { Users } = require("./utils/utils");
let users = new Users();
const SocketManager = require("./utils/SocketManager");

const app = express();
const server = require("http").Server(app);

// socket io server

const io = socketio(server, {
	cors: {
		origin: [
			"http://localhost:3000",
			"https://rimell.cc",
			"https://admin.socket.io",
			"http://192.168.1.90:3000"
		],
	},
});

io.on("connection", (socket) => {
	SocketManager(socket, io, users);
});

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});

var auth = { auth: false };

if (process.env.USERNAME && process.env.PASSWORD) {
	auth = {
		auth: {
			type: "basic",
			username: process.env.USERNAME,
			password: process.env.PASSWORD,
		},
	};
}

instrument(io, auth); // go to admin.socket.io for admin panel
