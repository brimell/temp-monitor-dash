import { useContext } from "react";
import { MainContext } from "../../context/context";

export default function AddDeviceModal() {
	const { addDeviceModal, addDeviceClose } = useContext(MainContext);

	const Modal = addDeviceModal;
	const Close = addDeviceClose;

	return (
		<Modal>
			<div className="modalContainer">
				<button className="close" onClick={Close}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
					</svg>
				</button>
			</div>
		</Modal>
	);
}
