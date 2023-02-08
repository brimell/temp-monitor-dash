import React, { useEffect, Suspense, lazy, useState } from "react";
import "./styles/global.scss";
import "./styles/index.css";
import Loading from "./components/Loading";
import ReloadPrompt from "./components/ReloadPrompt";

import { ContextProvider } from "./context/context";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Nav from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Floorplan = lazy(() => import("./pages/Floorplan"));
const Settings = lazy(() => import("./pages/Settings"));

const chakraTheme = extendTheme({
	styles: {
		global: {
			body: {
				fontFamily: `-apple-system, BlinkMacSystemFont, Inter, Helvetica, Arial,
              sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
				color: "var(--textColor)",
				background: "var(--bg)",
				minHeight: "100vh",
				width: "100%",
				padding: 0,
				margin: 0,
				overflowX: "hidden",
				textShadow: "rgba(0, 0, 0, .01) 0 0 1px",
				textRendering: "optimizeLegibility",
			},
		},
	},
});

function App() {
	return (
		<ChakraProvider theme={chakraTheme}>
			<ContextProvider>
				<ReloadPrompt />
				<Suspense fallback={<Loading />}>
					<div className="App">
						<Routes>
							<Route path="/" element={<Floorplan />}></Route>
							<Route
								path="/dashboard"
								element={<Dashboard />}
							></Route>
							<Route
								path="/settings"
								element={<Settings />}
							></Route>
						</Routes>
					</div>
					<Nav />
				</Suspense>
			</ContextProvider>{" "}
		</ChakraProvider>
	);
}

export default App;
