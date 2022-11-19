import React, { createContext, useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";

export const MainContext = createContext();

export function ContextProvider(props) {
	const [showTempBoxes, setShowTempBoxes] = useState(true);
	var api_url
	// modals

	const [createGameModal, CreateGameOpen, CreateGameClose, CreateGameIsOpen] =
		useModal("root", {
			preventScroll: true,
		});

	if (window.location.host.startsWith("localhost")) {
		api_url = "http://localhost:3003";
	} else if (window.location.host.startsWith("192")) {
		api_url = "https://192.168.1.90:3003";
	} else if (window.location.host.startsWith("rimell")) {
		api_url = "https://tmdash.rimell.cc/api";
	} else {
		api_url = "https://tmdash.rimell.cc/api";
	}
	// const api_url = "http://192.168.1.90:3003";

	return (
		<MainContext.Provider
			value={{
				showTempBoxes,
				setShowTempBoxes,
				api_url,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
