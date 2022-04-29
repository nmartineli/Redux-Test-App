//actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const increment = () => ({
	type: INCREMENT,
});

export const decrement = () => ({
	type: DECREMENT,
});

// estado inicial
const initialState = {
	count: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			//em uma aplicação real, teríamos muito mais estados dentro do estado que está dentro do redux. por isso fazemos un spread
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
