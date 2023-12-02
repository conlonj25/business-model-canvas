import './UnorderedList.css';
import ListItem from './ListItem';
import { useState } from 'react';

type UnorderedListProps = {
	title: string;
};

const UnorderedList = ({ title }: UnorderedListProps) => {
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
		<div className="unordered-list-container">
			<h3>{title}</h3>
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
				<button
					className="add-button"
					onClick={() => {
						addListItem();
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default UnorderedList;
