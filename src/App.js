import { useSelector } from 'react-redux';
import Counter from './Counter';
import './styles.css';

function App() {
	const count = useSelector((state) => state.counter.count);
	return (
		<div className="App">
			<h1>Redux made easy</h1>
			<h2> The count is {count} </h2>
			<Counter />
		</div>
	);
}

export default App;
