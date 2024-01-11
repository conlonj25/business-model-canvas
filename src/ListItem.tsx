import { FiTrash2 } from 'react-icons/fi';
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
			<div className="list-item">
				<input
					type="text"
					value={ListItemValue}
					onChange={(e) => {
						updateListItem(ListItemIndex, e.target.value);
					}}
				></input>
				<FiTrash2
					className="remove-button"
					onClick={() => {
						removeListItem(ListItemIndex);
					}}
				/>
			</div>
		</li>
	);
};

export default ListItem;
