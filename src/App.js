import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { getUser } from './redux/ducks/user';
import './styles.css';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	const user = useSelector((state) => state.user.user);
	console.log(user);
	//use selector é um hook do react-redux que usamos para selecionar o estado. conseguimos pegar dentro de state.NOME DO REDUCER.NOME DO ESTADO
	const count = useSelector((state) => state.counter.count);
	const Voters = ['Natalia Martineli', 'Bianca Banzato', 'Patrícia Pereira'];
	return (
		<div className="App">
			<h1>Redux made easy</h1>
			<h2> The total votes is {count} </h2>
			{Voters.map((voter) => (
				<Counter voter={voter} />
			))}
		</div>
	);
}

export default App;
