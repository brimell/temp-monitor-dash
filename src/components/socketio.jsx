import io from "socket.io-client";
import axios from "axios";

var socket;

if (window.location.host.startsWith("localhost")) {
	socket = io.connect("http://localhost:3001");
} else if (window.location.host.startsWith("192") || window.location.host.startsWith("127")) {
	socket = io.connect("http://127.0.0.1:3001");
} else if (window.location.host.startsWith("rimell")) {
	socket = io.connect(`https://rimell.cc/monitor_server`);
} else {
	console.log('request coming from incorrect site')
}

export default socket;
