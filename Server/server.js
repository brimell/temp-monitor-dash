// const rateLimit = require("express-rate-limit");
import express, { static as express_static } from "../express";
import socketio from "socket.io";
import cors from "cors";
import { resolve } from "path";

import { instrument } from "@socket.io/admin-ui";

import { Users } from "./utils/utils";
let users = new Users();
import SocketManager from "./utils/SocketManager";

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

// app.use(
//   rateLimit({
//     windowMs: 30000, // 30 seconds
//     max: 500,
//     message: "You exceeded the rate limit.",
//     headers: true,
//   })
// );

// if you want to host on / then change package.json homepage to /

app.use(cors());

app.use(express_static(resolve(__dirname, "../build")));

app.get("*", (req, res) => {
	res.sendFile(resolve(__dirname, "../build/index.html"));
});
// app.get("/port", (req, res) => {
// 	res.send(process.env.PORT);
// });

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
