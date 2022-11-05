import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function Floorplan() {
	const [diffX, setDiffX] = useState(0);
	const [diffY, setDiffY] = useState(0);
	const [draggingStatus, setDraggingStatus] = useState(false);
	const [styles, setStyles] = useState();

	function DraggableItem(props) {
		const { children, ...otherProps } = props;
		return (
			<div
				className="item"
				draggable
				style={styles}
				onMouseDown={dragStart}
				onMouseMove={dragging}
				onMouseUp={dragEnd}
				{...otherProps}
			>
				{children}
			</div>
		);
	}

	function dragStart(e) {
		setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
		setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
		setDraggingStatus(true);
	}

	function dragging(e) {
		if (draggingStatus) {
			var left = e.screenX - diffX;
			var top = e.screenY - diffY;

			setStyles({
				left: left,
				top: top,
				position: "absolute",
			});
		}
	}

	function dragEnd() {
		setDraggingStatus(false);
		setStyles({ position: "normal" });
	}

	function addDraggingStyle(target) {
		target.classList.add("dragging");
	}
	function removeDraggingStyle(target) {
		target.classList.remove("dragging");
	}

	return (
		<>
			<img src="/floorplan-example.png" id="floorplan_img" alt="" />
			<div className="floorplan_items">
				<DraggableItem>1A</DraggableItem>
				<DraggableItem>1B</DraggableItem>
				<DraggableItem>1C</DraggableItem>
			</div>
		</>
	);
}
