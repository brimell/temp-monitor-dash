import React from "react";
import "../../styles/floorplanNav.scss";

export default function FloorplanNav({ setFloor, floor }) {
	return (
		<>
			<div className="filters-container">
				<div className="filters-wrapper">
					<ul className="filter-tabs">
						<li>
							<button
								className={`filter-button ${
									floor == "downstairs" && "filter-active"
								}`}
								onClick={() => {
									setFloor("downstairs");
									localStorage.setItem(
										"current_floor",
										"downstairs"
									);
								}}
							>
								Downstairs
							</button>
						</li>
						<li>
							<button
								className={`filter-button ${
									floor == "upstairs" && "filter-active"
								}`}
								onClick={() => {
									setFloor("upstairs");
									localStorage.setItem(
										"current_floor",
										"upstairs"
									);
								}}
							>
								Upstairs
							</button>
						</li>
					</ul>
					<div className="filter-slider" aria-hidden="true">
						<div
							className="filter-slider-rect"
							style={{
								transform: `translateX(${
									floor == "downstairs" ? "0" : "100%"
								}`,
							}}
						>
							&nbsp;
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
