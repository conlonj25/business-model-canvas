import './ListItem.css';

type ListItemProps = {
	ListItemIndex: number;
	ListItemValue: string;
	updateListItem: (indexToUpdate: number, newValue: string) => void;
	removeListItem: (indexToRemove: number) => void;
};

const ListItem = ({
	ListItemIndex,
	ListItemValue,
	updateListItem,
	removeListItem,
}: ListItemProps) => {
	return (
		<li>
			<input
				type="text"
				value={ListItemValue}
				onChange={(e) => {
					updateListItem(ListItemIndex, e.target.value);
				}}
			></input>
			<button
				className="remove-button"
				onClick={() => {
					removeListItem(ListItemIndex);
				}}
			>
				X
			</button>
		</li>
	);
};

export default ListItem;
