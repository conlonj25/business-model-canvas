import './ListView.css';
import { ListIcons } from './constants';
import { List, ListTitle } from './types';

type ListViewProps = {
	title: ListTitle;
	list: List;
	openListEditor: () => void;
};

const ListView = ({ title, list, openListEditor }: ListViewProps) => {
	return (
		<div onClick={openListEditor} className="list-view-container">
			<div className="title-icon-container">
				<h3>{title}</h3>
				{ListIcons[title]({ className: 'list-icon' })}
			</div>
			<ul>
				{list.map((value) => (
					<li>{value}</li>
				))}
			</ul>
		</div>
	);
};

export default ListView;
