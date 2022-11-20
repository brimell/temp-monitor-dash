import React, { useEffect, Suspense, lazy, useState } from "react";
import "./styles/global.scss";

import Loading from "./components/Loading";
import ReloadPrompt from "./components/ReloadPrompt"
import { ContextProvider } from "./context/context";
import Nav from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Floorplan = lazy(() => import("./pages/Floorplan"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
	return (
		<ContextProvider>
			<ReloadPrompt />
			<Suspense fallback={<Loading />}>
				<div className="App">
					<Routes>
						<Route path="/" element={<Floorplan />}></Route>
						<Route path="/dashboard" element={<Dashboard />}></Route>
						<Route
							path="/settings"
							element={<Settings />}
						></Route>
					</Routes>
				</div>
				<Nav />
			</Suspense>
		</ContextProvider>
	);
}

export default App;
