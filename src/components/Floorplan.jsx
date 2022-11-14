import React, { useEffect, useState, useContext } from "react";
import $ from "jquery";
import { MainContext } from "../context/context";

export default function Floorplan() {
	const [diffX, setDiffX] = useState(0);
	const [diffY, setDiffY] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [styles, setStyles] = useState();
	const mobile = true;
	const {showTempBoxes} = useContext(MainContext)

	function DraggableItem(props) {
		const { children, ...otherProps } = props;

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
	}

	// PLAN
	// get the selected temp box
	// apply styles to that specific one
	// tabbar button shows + hides the floorplan_items

	function dragStart(e) {
		console.log("drag start");
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

	var temperatures = {
		1: 24,
		2: 25,
		3: 19,
	};

	return (
		<div className="floorplan" onTouchMove={mouseMove}>
			<img src="/floorplan-example.png" id="floorplan_img" alt="floorplan_image" />
			{showTempBoxes && <div className="floorplan_items">
				{Object.entries(temperatures).map((temp) => {
					return (
						<DraggableItem key={temp[0]} index={temp[0]}>
							{temp[1]}
						</DraggableItem>
					);
				})}
			</div>}
		</div>
	);
}
