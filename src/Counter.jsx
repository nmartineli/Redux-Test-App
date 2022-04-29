import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

export default function Counter() {
	//use selector é um hook do react-redux que usamos para selecionar o estado. conseguimos pegar dentro de state.NOME DO REDUCER.NOME DO ESTADO

	//hook para usar o dispatch que dispara o reducer
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div style={{ backgroundColor: 'grey', margin: '10px' }}>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button onClick={handleIncrement}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</div>
	);
}
