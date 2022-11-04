import React, { useEffect, useState } from "react";
import { polyfill } from "mobile-drag-drop";
// import $ from "jquery";

polyfill();
window.addEventListener("touchmove", (e) => {
    console.log('touchmove', e)
});

function DraggableItem(props) {
	const { children, ...otherProps } = props;
	return (
		<div className="item" draggable {...otherProps}>
			{children}
		</div>
	);
}

function List(props) {
	const { children, ...otherProps } = props;

	return (
		<div className="list" {...otherProps}>
			{children}
		</div>
	);
}

export default function Floorplan() {
	const [dragged, setDragged] = useState(null);

	const addHoverStyle = (element, placement = "after") => {
		if (placement === "before") {
			element.style.borderTop = "1px solid red";
			element.style.borderBottom = "none";
		} else {
			element.style.borderBottom = "1px solid red";
			element.style.borderTop = "none";
		}
	};
	const removeHoverStyle = (element) => {
		element.style.borderBottom = "none";
		element.style.borderTop = "none";
	};
	const preventDefault = (e) => e.preventDefault();
	const onDragStart = (e) => {
		setDragged(e.target);
	};
	const onDragLeave = (e) => {
		console.log("left");
		preventDefault();
		removeHoverStyle(e.target);
	};
	const onDrop = (e) => {
		const targetIsImage = e.target.className === "list";
		const list = targetIsImage ? e.target : e.target.parentNode;
		dragged.parentNode.removeChild(dragged);
		if (!targetIsImage) {
			removeHoverStyle(e.target);
			// Insert at correct position
			const item = e.target;
			const itemBounds = item.getBoundingClientRect();
			const dragY = e.clientY;
			const yMidpoint = itemBounds.y + itemBounds.height / 2;
			const insertBefore = dragY < yMidpoint;
			if (insertBefore) {
				list.insertBefore(dragged, item);
			} else {
				const nextItem = item.nextSibling;
				if (nextItem) {
					list.insertBefore(dragged, nextItem);
				} else {
					list.appendChild(dragged);
				}
			}
		} else {
			// Add to end of list
			list.appendChild(dragged);
		}
	};

	return (
		<>
			<img src="/floorplan-example.png" alt="" draggable={false} />
			<div className="floorplan">
				<List onDragEnter={preventDefault} onDrop={onDrop}>
					<DraggableItem
						onDragLeave={onDragLeave}
						onDragStart={onDragStart}
					>
						1A
					</DraggableItem>
					<DraggableItem
						onDragLeave={onDragLeave}
						onDragStart={onDragStart}
					>
						1B
					</DraggableItem>
					<DraggableItem
						onDragLeave={onDragLeave}
						onDragStart={onDragStart}
					>
						1C
					</DraggableItem>
				</List>
				<List onDragEnter={preventDefault} onDrop={onDrop}>
					<DraggableItem
						onDragLeave={onDragLeave}
						onDragStart={onDragStart}
					>
						2A
					</DraggableItem>
					<DraggableItem
						onDragLeave={onDragLeave}
						onDragStart={onDragStart}
					>
						2B
					</DraggableItem>
					<DraggableItem
						onDragLeave={onDragLeave}
						onDragStart={onDragStart}
					>
						2C
					</DraggableItem>
				</List>
			</div>
		</>
	);
}