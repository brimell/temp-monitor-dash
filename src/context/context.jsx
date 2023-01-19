import React, { createContext, useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";

export const MainContext = createContext();

export function ContextProvider(props) {
	var api_url;
	// modals

	const [addDeviceModal, addDeviceOpen, addDeviceClose, addDeviceIsOpen] =
		useModal("root", {
			preventScroll: true,
		});

	return (
		<MainContext.Provider
			value={{
				api_url,
				addDeviceModal,
				addDeviceOpen,
				addDeviceClose,
				addDeviceIsOpen,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
