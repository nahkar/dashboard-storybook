import MuiModal from '@mui/material/Modal';

type Props = {
	children: React.ReactNode;
	isOpenModal: boolean;
	handleCloseModal: () => void;
};

export const Modal = ({ children, isOpenModal, handleCloseModal }: Props) => {
	return (
		<div>
			<MuiModal
				open={isOpenModal}
				onClose={handleCloseModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div>{children}</div>
			</MuiModal>
		</div>
	);
};
