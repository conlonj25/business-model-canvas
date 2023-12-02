import './App.css';
import UnorderedList from './UnorderedList';

const App = () => {
	return (
		<>
			<h1>Business Model Canvas</h1>
			<div className="app-container">
				<UnorderedList title={'Key Partners'} />
				<UnorderedList title={'Key Partners'} />
			</div>
		</>
	);
};

export default App;
