import React, { useEffect, Suspense, lazy, useState } from "react";
import "./global.scss";
import "./components/firebaseInit";

import Loading from "./components/Loading";
import ReloadPrompt from "./components/ReloadPrompt"
import { ContextProvider } from "./context/context";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Instructions = lazy(() => import("./pages/Instructions"));

function App() {
	const [count, setCount] = useState(0);

	return (
		<ContextProvider>
			<ReloadPrompt/>
			<Suspense fallback={<Loading />}>
				<div className="App">
					<Nav />
					<Routes>
						<Route path="/" element={<Dashboard />}></Route>
						<Route
							path="/instructions"
							element={<Instructions />}
						></Route>
					</Routes>
				</div>
			</Suspense>
		</ContextProvider>
	);
}

export default App;
