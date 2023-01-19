export const apiUrl = (): string => {
	if (window.location.host.startsWith("localhost")) {
		return "http://localhost:3003";
	} else if (window.location.host.startsWith("192")) {
		return "http://192.168.1.90:3003"; // make sure that this is http as https won't work
	} else if (window.location.host.startsWith("rimell")) {
		return "https://tmdash.rimell.cc/api";
	} else {
		return "https://tmdash.rimell.cc/api";
	}
};
