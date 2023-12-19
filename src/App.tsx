import { useState } from 'react';
import './App.css';
import ListView from './ListView';
import { Canvas, ListTitle } from './types';
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
import useLocalStorageState from 'use-local-storage-state';

const App = () => {
	const [canvas, setCanvas] = useLocalStorageState('business-model-canvas', {
		defaultValue: emptyCanvas as Canvas,
	});
	const [editorIsVisible, setEditorIsVisible] = useState(false);
	const [editorList, setEditorList] = useState<ListTitle>(keyPartners);

	const closeListEditor = () => setEditorIsVisible(false);
	const openListEditor = (title: ListTitle) => () => {
		setEditorList(title);
		setEditorIsVisible(true);
	};

	return (
		<>
			<div className="stack">
				<div className="row">
					<ListView
						title={keyPartners}
						list={canvas[keyPartners]}
						openListEditor={openListEditor(keyPartners)}
					/>
					<div className="stack">
						<ListView
							title={keyActivities}
							list={canvas[keyActivities]}
							openListEditor={openListEditor(keyActivities)}
						/>
						<ListView
							title={keyResources}
							list={canvas[keyResources]}
							openListEditor={openListEditor(keyResources)}
						/>
					</div>
					<ListView
						title={valuePropositions}
						list={canvas[valuePropositions]}
						openListEditor={openListEditor(valuePropositions)}
					/>
					<div className="stack">
						<ListView
							title={customerRelationships}
							list={canvas[customerRelationships]}
							openListEditor={openListEditor(
								customerRelationships
							)}
						/>
						<ListView
							title={channels}
							list={canvas[channels]}
							openListEditor={openListEditor(channels)}
						/>
					</div>
					<ListView
						title={customerSegments}
						list={canvas[customerSegments]}
						openListEditor={openListEditor(customerSegments)}
					/>
				</div>
				<div className="row">
					<ListView
						title={costStructure}
						list={canvas[costStructure]}
						openListEditor={openListEditor(costStructure)}
					/>
					<ListView
						title={revenueStreams}
						list={canvas[revenueStreams]}
						openListEditor={openListEditor(revenueStreams)}
					/>
				</div>
			</div>

			<ListEditor
				isVisible={editorIsVisible}
				closeListEditor={closeListEditor}
				title={editorList}
				canvas={canvas}
				setCanvas={setCanvas}
			/>
		</>
	);
};

export default App;
