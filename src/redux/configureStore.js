import { combineReducers, createStore } from 'redux';
import counterReducer from './ducks/counter';

//trabalhando na estrutura de ducks, criamos vários arquivos para organizar os reducers. então é necessário fazer um combine para unir todos na store
const reducer = combineReducers({
	counter: counterReducer,
});

const store = createStore(reducer);

export default store;
