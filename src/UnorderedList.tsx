import './UnorderedList.css';

import { List } from './types';

type UnorderedListProps = {
	title: string;
	list: List;
	openEditor: () => void;
};

const UnorderedList = ({ title, list, openEditor }: UnorderedListProps) => {
	return (
		<div onClick={openEditor} className="unordered-list-container">
			<h3>{title}</h3>
			<ul>
				{list.map((value) => (
					<li>{value}</li>
				))}
			</ul>
		</div>
	);
};

export default UnorderedList;
