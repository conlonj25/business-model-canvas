import { useState } from 'react';
import './App.css';
import UnorderedList from './UnorderedList';
import { Canvas } from './types';
import {
	channels,
	costStructure,
	customerRelationships,
	customerSegments,
	emptyCanvas,
	keyActivities,
	keyPartners,
	keyResources,
	revenueStreams,
	valuePropositions,
} from './constants';
import ListEditor from './ListEditor';

const showModal = () => {
	const dialog = document.getElementById('list-editor') as HTMLDialogElement;
	dialog && dialog.showModal();
};

const App = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [canvas, setCanvas] = useState<Canvas>(emptyCanvas);

	return (
		<>
			<div className="stack">
				<div className="row">
					<UnorderedList
						title={keyPartners}
						list={canvas[keyPartners]}
					/>
					<div className="stack">
						<UnorderedList
							title={keyActivities}
							list={canvas[keyActivities]}
						/>
						<UnorderedList
							title={keyResources}
							list={canvas[keyResources]}
						/>
					</div>
					<UnorderedList
						title={valuePropositions}
						list={canvas[valuePropositions]}
					/>
					<div className="stack">
						<UnorderedList
							title={customerRelationships}
							list={canvas[customerRelationships]}
						/>
						<UnorderedList
							title={channels}
							list={canvas[channels]}
						/>
					</div>
					<UnorderedList
						title={customerSegments}
						list={canvas[customerSegments]}
					/>
				</div>
				<div className="row">
					<UnorderedList
						title={costStructure}
						list={canvas[costStructure]}
					/>
					<UnorderedList
						title={revenueStreams}
						list={canvas[revenueStreams]}
					/>
				</div>
			</div>
			<ListEditor />
			<button onClick={showModal}>PUSH ME</button>
		</>
	);
};

export default App;
