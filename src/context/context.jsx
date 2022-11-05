import React, { createContext, useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";

export const MainContext = createContext();

export function ContextProvider(props) {
	const [showTempBoxes, setShowTempBoxes] = useState(true);

	// modals

	const [createGameModal, CreateGameOpen, CreateGameClose, CreateGameIsOpen] =
		useModal("root", {
			preventScroll: true,
		});

	return (
		<MainContext.Provider
			value={{
				showTempBoxes,
				setShowTempBoxes,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
