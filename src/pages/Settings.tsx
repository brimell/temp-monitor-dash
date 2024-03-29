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
	Switch,
	Tooltip,
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
					<Stack>
						{/* <TempSelector /> */}
						<RefreshRateSlider />
						<HolidayModeToggle />
						{/* <DevicesPanel /> */}
					</Stack>
				</CardBody>
			</Card>
		</>
	);
}
function HolidayModeToggle() {
	const [refreshRate, setRefreshRate] = useState(10);
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			variant="outline"
		>
			<CardBody>
				<Stack
					direction="row"
					style={{ justifyContent: "space-between" }}
				>
					<Tooltip label="Reduced power consumption" aria-label="A tooltip">
						<a style={{ fontSize: "16px" }}>Holiday Mode</a>
					</Tooltip>
					<Switch colorScheme="green" size="lg" />
				</Stack>
			</CardBody>
		</Card>
	);
}

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
