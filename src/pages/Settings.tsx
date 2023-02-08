import {
	Card,
	CardHeader,
	Heading,
	CardBody,
	Stack,
	StackDivider,
	Box,
	Text,
	Button,
	CardFooter,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Settings() {
	return (
		<>
			<Card
				style={{
					background: "#F2F2F6",
					borderRadius: "25px",
					margin: "4%",
				}}
			>
				<CardHeader>
					<p className="font-extrabold text-3xl">Settings</p>
				</CardHeader>

				<CardBody>
					{/* <TempSelector /> */}
					<RefreshRateSlider />
					<HolidayModeToggle />
					{/* <DevicesPanel /> */}
				</CardBody>
			</Card>
		</>
	);
}
function HolidayModeToggle() {}
function RefreshRateSlider() {
	const [refreshRate, setRefreshRate] = useState(10);
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			variant="outline"
		>
			<CardBody>
				<a style={{ fontSize: "16px" }}>
					Refresh Rate: every {refreshRate} seconds
				</a>
			</CardBody>

			<CardFooter>
				<Slider
					aria-label="slider-ex-1"
					defaultValue={10}
					value={refreshRate}
					onChange={(val) => {
						setRefreshRate(val);
					}}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</CardFooter>
		</Card>
	);
}
