/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Modal from './Modal';

const App = () => {
	const [canvas, setCanvas] = useState<Canvas>(emptyCanvas);
	const [editorIsVisible, setEditorIsVisible] = useState(false);

	return (
		<>
			<div className="stack">
				<div className="row">
					<UnorderedList
						title={keyPartners}
						list={canvas[keyPartners]}
						openEditor={() => setEditorIsVisible(true)}
					/>
					<div className="stack">
						<UnorderedList
							title={keyActivities}
							list={canvas[keyActivities]}
							openEditor={() => setEditorIsVisible(true)}
						/>
						<UnorderedList
							title={keyResources}
							list={canvas[keyResources]}
							openEditor={() => setEditorIsVisible(true)}
						/>
					</div>
					<UnorderedList
						title={valuePropositions}
						list={canvas[valuePropositions]}
						openEditor={() => setEditorIsVisible(true)}
					/>
					<div className="stack">
						<UnorderedList
							title={customerRelationships}
							list={canvas[customerRelationships]}
							openEditor={() => setEditorIsVisible(true)}
						/>
						<UnorderedList
							title={channels}
							list={canvas[channels]}
							openEditor={() => setEditorIsVisible(true)}
						/>
					</div>
					<UnorderedList
						title={customerSegments}
						list={canvas[customerSegments]}
						openEditor={() => setEditorIsVisible(true)}
					/>
				</div>
				<div className="row">
					<UnorderedList
						title={costStructure}
						list={canvas[costStructure]}
						openEditor={() => setEditorIsVisible(true)}
					/>
					<UnorderedList
						title={revenueStreams}
						list={canvas[revenueStreams]}
						openEditor={() => setEditorIsVisible(true)}
					/>
				</div>
			</div>

			<Modal
				isVisible={editorIsVisible}
				closeModal={() => setEditorIsVisible(false)}
			>
				<p>ABC 123</p>
				<p>TENNESSEE</p>
				<p>Boat Inc.</p>
			</Modal>

			<button onClick={() => setEditorIsVisible(true)}>Toggle</button>
		</>
	);
};

export default App;
