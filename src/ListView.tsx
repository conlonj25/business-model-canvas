import './ListView.css';
import { List, ListTitle } from './types';

type ListViewProps = {
	title: ListTitle;
	list: List;
	openListEditor: () => void;
};

const ListView = ({ title, list, openListEditor }: ListViewProps) => {
	return (
		<div onClick={openListEditor} className="list-view-container">
			<h3>{title}</h3>
			<ul>
				{list.map((value) => (
					<li>{value}</li>
				))}
			</ul>
		</div>
	);
};

export default ListView;
