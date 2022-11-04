import React, { useEffect } from "react";
import $ from "jquery";
import background_img from "../assets/floorplan-example.png";

export default function Dashboard() {
	useEffect(() => {
		const canvas = document.getElementById("canvas");
		const context = canvas.getContext("2d");

		let items = [];
		let mouse = {
			clicked: false,
			x: 0,
			y: 0,
			currentlyHeldItem: null,
		};

		addRectangle(40, 40, 200, 200, "#ff6b95");
		addRectangle(80, 80, 200, 200, "#83ffd1");
		addRectangle(120, 120, 200, 200, "#7f7fe8");
		addRectangle(160, 160, 200, 200, "#ffb24b");

		canvas.addEventListener("mousedown", ({ offsetX, offsetY }) => {
			mouse.clicked = true;

			let item = findTopItem(offsetX, offsetY);
			if (item) {
				putItemOnTop(item);
				mouse.currentlyHeldItem = item;
			}
		});

		canvas.addEventListener("mouseup", (_) => {
			mouse.clicked = false;
			mouse.currentlyHeldItem = null;
		});

		canvas.addEventListener("mousemove", ({ offsetX, offsetY }) => {
			if (mouse.clicked && mouse.currentlyHeldItem) {
				mouse.currentlyHeldItem.x += offsetX - mouse.x;
				mouse.currentlyHeldItem.y += offsetY - mouse.y;
			}

			mouse.x = offsetX;
			mouse.y = offsetY;
		});

		function addRectangle(x = 0, y = 0, width = 10, height = 10, color) {
			let rectangle = {
				x: x,
				y: y,
				width: width,
				height: height,
				color: color,
			};

			items.push(rectangle);
		}

		const findTopItem = (x, y) =>
			items.filter((item) => isInBounds(x, y, item)).pop();

		const isInBounds = (x, y, item) =>
			x > item.x &&
			x < item.x + item.width &&
			y > item.y &&
			y < item.y + item.height;

		function putItemOnTop(item) {
			items.splice(items.indexOf(item), 1);
			items.push(item);
		}

		function render() {
			context.clearRect(0, 0, canvas.width, canvas.height);

			items.forEach((element) => {
				context.beginPath();
				context.rect(
					element.x,
					element.y,
					element.width,
					element.height
				);
				context.fillStyle = element.color;
				context.fill();
			});
		}

		setInterval((_) => render(), 1000 / 60);

		// image background

		var canvas2 = document.getElementById("canvas"),
			ctx = canvas2.getContext("2d");

		var background = new Image();
		background.src = "/src/assets/floorplan-example.png";

		// Make sure the image is loaded first otherwise nothing will draw.
		background.onload = () => {
			ctx.drawImage(background, 0, 0);
		};
	}, []);

	return (
		<>
			<canvas id="canvas"></canvas>
		</>
	);
}
