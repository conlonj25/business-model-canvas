import { useEffect, useRef } from 'react';

type ModalProps = {
	isVisible: boolean;
	closeModal: () => void;
	children: JSX.Element[];
};

const Modal = ({ isVisible: visible, closeModal, children }: ModalProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (ref.current) {
			if (visible) {
				ref.current.showModal();
			} else {
				ref.current.close();
			}
		}
	}, [visible]);

	return (
		<dialog ref={ref} onCancel={closeModal}>
			{children}
			<button onClick={closeModal}>Close</button>
		</dialog>
	);
};

export default Modal;
