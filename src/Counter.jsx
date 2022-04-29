import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

export default function Counter(props) {
	const { voter } = props;

	//hook para usar o dispatch que dispara o reducer
	const dispatch = useDispatch();

	const [votes, setVotes] = useState(0);

	const handleIncrement = () => {
		dispatch(increment());
		setVotes(votes + 1);
	};

	const handleDecrement = () => {
		dispatch(decrement());
		setVotes(votes - 1);
	};

	return (
		<div style={{ backgroundColor: 'grey', margin: '10px' }}>
			<h2>{voter}</h2>
			<h3>Votes: {votes}</h3>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button onClick={handleIncrement}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</div>
	);
}
