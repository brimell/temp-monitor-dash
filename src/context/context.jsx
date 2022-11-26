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

	if (window.location.host.startsWith("localhost")) {
		api_url = "http://localhost:3003";
	} else if (window.location.host.startsWith("192")) {
		api_url = "http://192.168.1.90:3003"; // make sure that this is http as https won't work
	} else if (window.location.host.startsWith("rimell")) {
		api_url = "https://tmdash.rimell.cc/api";
	} else {
		api_url = "https://tmdash.rimell.cc/api";
	}
	// const api_url = "http://192.168.1.90:3003";

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
