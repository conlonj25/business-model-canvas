import React, { useEffect, useRef } from 'react';
import { Canvas, ListTitle } from './types';
import ListItem from './ListItem';

type ListEditorProps = {
	isVisible: boolean;
	closeListEditor: () => void;
	title: ListTitle;
	canvas: Canvas;
	setCanvas: React.Dispatch<React.SetStateAction<Canvas>>;
};

const ListEditor = ({
	isVisible: visible,
	closeListEditor,
	title,
	canvas,
	setCanvas,
}: ListEditorProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (visible) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [visible]);

	const list = canvas[title];

	const addListItem = () => {
		const newList = [...list, ''];
		setCanvas({ ...canvas, [title]: newList });
	};

	const removeListItem = (indexToRemove: number) => {
		const newList = list.filter((_, i) => i !== indexToRemove);
		setCanvas({ ...canvas, [title]: newList });
	};

	const updateListItem = (indexToUpdate: number, newValue: string) => {
		const newList = list.map((oldValue, i) =>
			indexToUpdate === i ? newValue : oldValue
		);
		setCanvas({ ...canvas, [title]: newList });
	};

	return (
		<dialog ref={ref} onCancel={closeListEditor}>
			<div className="button-align">
				<button onClick={closeListEditor}>X</button>
			</div>
			<h1>{title}</h1>
			<ul>
				{list.map((value, i) => (
					<ListItem
						ListItemIndex={i}
						ListItemValue={value}
						updateListItem={updateListItem}
						removeListItem={removeListItem}
					/>
				))}
			</ul>
			<div className="button-align">
				<button onClick={addListItem}>+</button>
			</div>
		</dialog>
	);
};

export default ListEditor;
