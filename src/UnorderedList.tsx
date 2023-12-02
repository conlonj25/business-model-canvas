import './UnorderedList.css';
import ListItem from './ListItem';
import { useState } from 'react';

const UnorderedList = () => {
	const [list, setList] = useState<string[]>(['']);

	const addListItem = () => {
		setList([...list, '']);
	};

	const removeListItem = (indexToRemove: number) => {
		setList(list.filter((_, i) => i !== indexToRemove));
	};

	const updateListItem = (indexToUpdate: number, newValue: string) => {
		setList(
			list.map((oldValue, i) =>
				indexToUpdate === i ? newValue : oldValue
			)
		);
	};

	return (
		<>
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
			<button
				onClick={() => {
					addListItem();
				}}
			>
				+
			</button>
		</>
	);
};

export default UnorderedList;
