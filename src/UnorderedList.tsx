import './UnorderedList.css';

import { List } from './types';

type UnorderedListProps = {
	title: string;
	list: List;
};

const UnorderedList = ({ title, list }: UnorderedListProps) => {
	return (
		<div className="unordered-list-container">
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
