import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function Floorplan() {
	const [diffX, setDiffX] = useState(0);
	const [diffY, setDiffY] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [styles, setStyles] = useState();

	function DraggableItem(props) {
		const { children, ...otherProps } = props;
		return (
			<div
				className="item"
				draggable
				style={styles}
				onMouseDown={dragStart}
				onMouseUp={dragEnd}
				{...otherProps}
			>
				{children}
			</div>
		);
	}

	function dragStart(e) {
		console.log("drag start");
		setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
		setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
		setDragging(true);
	}

	function mouseMove(e) {
		// console.log(dragging);
		if (dragging) {
			var left = e.screenX - diffX;
			var top = e.screenY - diffY;

			setStyles({
				left: left,
				top: top,
				opacity: "50%",
				position: "absolute",
			});
		}
	}

	function dragEnd() {
		console.log("dragend");
		setDragging(false);
		// setStyles({ position: "fixed" });
	}

	function addDraggingStyle(target) {
		target.classList.add("dragging");
	}
	function removeDraggingStyle(target) {
		target.classList.remove("dragging");
	}

	var temperatures = {
		1: 24,
		2: 25,
		3: 19,
	};

	return (
		<div className="floorplan" onMouseMove={mouseMove}>
			<img src="/floorplan-example.png" id="floorplan_img" alt="" />
			<div className="floorplan_items">
				{Object.entries(temperatures).map((temp) => {
					return (
						<DraggableItem key={temp[0]}>{temp[1]}</DraggableItem>
					);
				})}
			</div>
		</div>
	);
}
