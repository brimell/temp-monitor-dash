import React, { createContext, useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";
import socket from "../components/socketio";

export const MainContext = createContext();

export function ContextProvider(props) {

	// modals

	const [createGameModal, CreateGameOpen, CreateGameClose, CreateGameIsOpen] =
		useModal("root", {
			preventScroll: true,
		});

	return (
		<MainContext.Provider
			value={{
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
