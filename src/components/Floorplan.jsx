import React, { useEffect, useState, useContext } from "react";
import $ from "jquery";
import { MainContext } from "../context/context";
import axios from "axios";

export default function Floorplan() {
	const [diffX, setDiffX] = useState(50);
	const [diffY, setDiffY] = useState(50);
	const [dragging, setDragging] = useState(false);
	const [dragging_id, setDragging_id] = useState();
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
		// if (document.readState == "complete") {
		// 	setMobile(screen.width < 450 ? true : false);
		// }
		setMobile(screen.width < 450 ? true : false);

		const { children, ...otherProps } = props;

		if (mobile) {
			return (
				<div
					id={props.index}
					className="item"
					draggable
					style={styles ? styles[props.index] : null}
					onTouchStart={() => {
						setDragging_id(props.index);
						setDragging(true);
					}}
					// onTouchMove={mouseMove}
					{...otherProps}
				>
					{children}
				</div>
			);
		} else {
			return (
				<div
					id={props.index}
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
		console.log("mousemove dragging:",dragging, "mobile:",mobile);
		if (dragging) {
			if (mobile) {
				var left = e.touches[0].clientX - diffX;
				var top = e.touches[0].clientY - diffY;
				console.log(e, left, top, diffX, diffY);
				var local_styles = {};
				local_styles[dragging_id] = {
					left: left,
					top: top,
					position: "absolute",
				};
				// console.log(local_styles, dragging_id)
				setStyles(local_styles);
			} else {
				var left = e.screenX - diffX;
				var top = e.screenY - diffY;
				// console.log(e, left, top, e.screenX, e.screenY, diffX, diffY);

				setStyles({
					left: left,
					top: top,
					position: "absolute",
				});
			}
		}
	}

	function dragEnd() {
		console.log("dragend");
		setDragging(false);
	}

	return (
		<div className="floorplan" onTouchMove={mouseMove} onTouchEnd={dragEnd}>
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
