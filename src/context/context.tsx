import React, { createContext, useState, useEffect } from "react";
import { ModalWrapperProps, useModal } from "react-hooks-use-modal";
import { apiUrl } from "./constants";
import axios from "axios";
import { tempsI } from "../../lib/store";

interface contextInterface {
	addDeviceModal: React.FC<ModalWrapperProps<Record<string, unknown>>>;
	addDeviceOpen;
	addDeviceClose;
	addDeviceIsOpen: boolean;
	temps: tempsI;
	setTemps: React.Dispatch<React.SetStateAction<tempsI>>;
}
export const MainContext = createContext<contextInterface | null>(null);

export function ContextProvider(props) {
	// modals

	const [addDeviceModal, addDeviceOpen, addDeviceClose, addDeviceIsOpen] =
		useModal("root", {
			preventScroll: true,
		});

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
				addDeviceModal,
				addDeviceOpen,
				addDeviceClose,
				addDeviceIsOpen,
				temps,
				setTemps,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
