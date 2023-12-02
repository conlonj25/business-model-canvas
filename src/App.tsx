import './App.css';
import UnorderedList from './UnorderedList';

const App = () => {
	return (
		<>
			<div className="stack">
				<div className="row">
					<UnorderedList title={'Key Partners'} />
					<div className="stack">
						<UnorderedList title={'Key Activities'} />
						<UnorderedList title={'Key Resources'} />
					</div>
					<UnorderedList title={'Value Propositions'} />
					<div className="stack">
						<UnorderedList title={'Customer Relationships'} />
						<UnorderedList title={'Channels'} />
					</div>
					<UnorderedList title={'Customer Segments'} />
				</div>
				<div className="row">
					<UnorderedList title={'Cost Structure'} />
					<UnorderedList title={'Revenue Streams'} />
				</div>
			</div>
		</>
	);
};

export default App;
