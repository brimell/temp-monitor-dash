import React, { useEffect, useState, useContext } from "react";
import $ from "jquery";
import { MainContext } from "../context/context";
import axios from "axios";

export default function Floorplan() {
	const [diffX, setDiffX] = useState(0);
	const [diffY, setDiffY] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [styles, setStyles] = useState();
	const [mobile, setMobile] = useState();
	const { showTempBoxes, api_url } = useContext(MainContext);
	const [temps, setTemps] = useState({
		1: ["-", "loading", 1],
	});

	useEffect(() => {
		function getLatestTemps() {
			axios.get(api_url + "/get_latest_temps").then((data) => {
				setTemps(data.data);
			});
		}
		getLatestTemps();
		setInterval(getLatestTemps, 10000);
	}, []);

	function DraggableItem(props) {
		setMobile(screen.width < 450 ? true : false);
		const { children, ...otherProps } = props;

		if (mobile) {
			return (
				<div
					className="item"
					draggable
					style={styles}
					onTouchStart={dragStart}
					onDragEnd={dragEnd}
					// onTouchMove={mouseMove}
					{...otherProps}
				>
					{children}
				</div>
			);
		} else {
			return (
				<div
					className="item"
					draggable
					style={styles}
					onDragStart={dragStart}
					onDragEnd={dragEnd}
					// onTouchMove={mouseMove}
					{...otherProps}
				>
					{children}
				</div>
			);
		}
	}

	// PLAN
	// get the selected temp box
	// apply styles to that specific one
	// tabbar button shows + hides the floorplan_items

	function dragStart(e) {
		e.preventDefault();
		setDiffX(
			e.touches[0].screenX - e.currentTarget.getBoundingClientRect().left
		);
		setDiffY(
			e.touches[0].screenY - e.currentTarget.getBoundingClientRect().top
		);
		setDragging(true);
	}

	function mouseMove(e) {
		console.log("mousemove");
		console.log(e);
		if (dragging) {
			if (mobile) {
				var left = e.touches[0].screenX - diffX;
				var top = e.touches[0].screenY - diffY;
				console.log(e, left, top, diffX, diffY);

				setStyles({
					left: left,
					top: top,
					opacity: "50%",
					position: "absolute",
				});
			} else {
				var left = e.screenX - diffX;
				var top = e.screenY - diffY;
				console.log(e, left, top, e.screenX, e.screenY, diffX, diffY);

				setStyles({
					left: left,
					top: top,
					opacity: "50%",
					position: "absolute",
				});
			}
		}
	}

	function dragEnd() {
		console.log("dragend");
		removeDraggingStyle();
		setDragging(false);
	}

	return (
		<div className="floorplan" onTouchMove={mouseMove}>
			<img
				src="/imgs/floorplan-example.png"
				id="floorplan_img"
				alt="floorplan_image"
			/>
			{showTempBoxes && (
				<div className="floorplan_items">
					{Object.values(temps).map((temp) => {
						return (
							<DraggableItem
								key={
									String(temp[2]) + String(temp[0]) + temp[1]
								}
								index={temp[2]}
							>
								{temp[0]}
							</DraggableItem>
						);
					})}
				</div>
			)}
		</div>
	);
}
