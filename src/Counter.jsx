import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div style={{ backgroundColor: 'grey', margin: '10px' }}>
			<h3>{`Count: ${count}`}</h3>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	);
}
