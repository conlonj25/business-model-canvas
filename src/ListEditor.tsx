const ListEditor = () => {
	const closeModal = () => {
		const dialog = document.getElementById(
			'list-editor'
		) as HTMLDialogElement;
		dialog && dialog.close();
	};

	return (
		<dialog id="list-editor">
			<p>Hey!</p>
			<button onClick={closeModal}>Close</button>
		</dialog>
	);
};

export default ListEditor;
