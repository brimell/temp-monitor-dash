import React, { createContext, useState, useEffect } from "react";
import { apiUrl } from "./constants";
import axios from "axios";
import { tempsI } from "../../lib/store";

interface contextInterface {
	temps: tempsI;
	setTemps: React.Dispatch<React.SetStateAction<tempsI>>;
}
export const MainContext = createContext<contextInterface | null>(null);

export function ContextProvider(props) {
	const [temps, setTemps] = useState<tempsI>({
		1: [0, "loading", 1],
	});
	useEffect(() => {
		function getLatestTemps() {
			axios.get(apiUrl() + "/get_latest_temps").then((data) => {
				setTemps(data.data);
			});
		}
		getLatestTemps();
		setInterval(getLatestTemps, 5000);
	}, []);
	return (
		<MainContext.Provider
			value={{
				temps,
				setTemps,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
