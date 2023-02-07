import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../context/context";
import FloorplanNav from "../components/nav/FloorplanNav";

interface stylesI {
	left?: number;
	top?: number;
	position?: string;
}
export default function Floorplan() {
	const [diffX, setDiffX] = useState(50);
	const [diffY, setDiffY] = useState(50);
	const [dragging, setDragging] = useState(false);
	const [dragging_id, setDragging_id] = useState<string>("");
	const [styles, setStyles] = useState<stylesI>();
	const [mobile, setMobile] = useState<boolean>(false);

	const [floor, setFloor] = useState(
		localStorage.getItem("current_floor") || "downstairs"
	);
	const { temps } = useContext(MainContext);

	function DraggableItem(props) {
		// if (document.readState == "complete") {
		// 	setMobile(screen.width < 450 ? true : false);
		// }
		useEffect(() => {
			setMobile(screen.width < 450 ? true : false);
		});

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
		console.log("mousemove dragging:", dragging, "mobile:", mobile);
		if (dragging) {
			if (mobile) {
				let left = e.touches[0].clientX - diffX;
				let top = e.touches[0].clientY - diffY;
				console.log(e, left, top, diffX, diffY);
				let local_styles = {};
				local_styles[dragging_id] = {
					left: left,
					top: top,
					position: "absolute",
				};
				// console.log(local_styles, dragging_id)
				setStyles(local_styles);
			} else {
				let left = e.screenX - diffX;
				let top = e.screenY - diffY;
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
		<>
			<FloorplanNav setFloor={setFloor} floor={floor} />
			<div
				className="floorplan"
				onTouchMove={mouseMove}
				onTouchEnd={dragEnd}
			>
				<img
					src="/imgs/floorplan.svg"
					id="floorplan_img"
					alt="floorplan_image"
				/>

				<div className="floorplan_items">
					{Object.values(temps).map((temp) => {
						return (
							<DraggableItem
								key={
									String(temp[2]) + String(temp[0]) + temp[1]
								}
								index={temp[2]}
							>
								({temp[2]})
								<svg
									width="12"
									height="20"
									viewBox="0 0 12 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.40519 10.3199L10.0653 9.56875L9.40519 10.3199ZM2.5948 10.3199L3.25492 11.0711L2.5948 10.3199ZM4 4.5C4 3.39543 4.89543 2.5 6 2.5V0.5C3.79086 0.5 2 2.29086 2 4.5H4ZM4 9.48298V4.5H2V9.48298H4ZM2 13.7778C2 12.7219 2.4727 11.7585 3.25492 11.0711L1.93469 9.56875C0.754685 10.6057 0 12.1026 0 13.7778H2ZM6 17.5C3.73624 17.5 2 15.7804 2 13.7778H0C0 16.9912 2.74091 19.5 6 19.5V17.5ZM10 13.7778C10 15.7804 8.26376 17.5 6 17.5V19.5C9.25909 19.5 12 16.9912 12 13.7778H10ZM8.74508 11.0711C9.5273 11.7585 10 12.7219 10 13.7778H12C12 12.1026 11.2453 10.6057 10.0653 9.56875L8.74508 11.0711ZM8 4.5V9.48298H10V4.5H8ZM6 2.5C7.10457 2.5 8 3.39543 8 4.5H10C10 2.29086 8.20914 0.5 6 0.5V2.5ZM10.0653 9.56875C10.0332 9.54054 10.0148 9.51373 10.006 9.49616C9.99801 9.48008 10 9.47632 10 9.48298H8C8 10.148 8.32916 10.7056 8.74508 11.0711L10.0653 9.56875ZM2 9.48298C2 9.47632 2.00199 9.48008 1.99396 9.49616C1.98519 9.51373 1.9668 9.54054 1.93469 9.56875L3.25492 11.0711C3.67084 10.7056 4 10.148 4 9.48298H2Z"
										fill="white"
									/>
									<ellipse
										cx="6"
										cy="13.7776"
										rx="2"
										ry="1.88889"
										fill="white"
									/>
								</svg>
								{temp[0]}°
							</DraggableItem>
						);
					})}
				</div>
			</div>
		</>
	);
}
