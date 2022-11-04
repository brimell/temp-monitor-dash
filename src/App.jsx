import React, { useEffect, Suspense, lazy, useState } from "react";
import "./styles/global.scss";

import Loading from "./components/Loading";
import ReloadPrompt from "./components/ReloadPrompt"
import { ContextProvider } from "./context/context";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Instructions = lazy(() => import("./pages/Instructions"));

function App() {
	const [count, setCount] = useState(0);

	return (
		<ContextProvider>
			<ReloadPrompt />
			<Suspense fallback={<Loading />}>
				<div className="App">
					<Routes>
						<Route path="/" element={<Dashboard />}></Route>
						<Route
							path="/instructions"
							element={<Instructions />}
						></Route>
					</Routes>
				</div>
				<Nav />
			</Suspense>
		</ContextProvider>
	);
}

export default App;
